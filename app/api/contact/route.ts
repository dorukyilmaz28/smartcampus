import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@microsoft/microsoft-graph-client'
import { ConfidentialClientApplication } from '@azure/msal-node'

export async function POST(request: NextRequest) {
  try {
    console.log('API Route called')
    const body = await request.json()
    console.log('Request body:', body)
    const { name, email, company, message, service } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed: missing required fields')
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format')
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Microsoft Graph API ile email gönderimi
    try {
      // MSAL configuration
      const msalConfig = {
        auth: {
          clientId: process.env.AZURE_CLIENT_ID || '',
          clientSecret: process.env.AZURE_CLIENT_SECRET || '',
          authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID || ''}`
        }
      }

      const cca = new ConfidentialClientApplication(msalConfig)
      
      // Get access token
      const tokenResponse = await cca.acquireTokenByClientCredential({
        scopes: ['https://graph.microsoft.com/.default']
      })

      if (!tokenResponse) {
        throw new Error('Failed to acquire access token')
      }

      // Initialize Graph client
      const graphClient = Client.init({
        authProvider: (done) => {
          done(null, tokenResponse.accessToken)
        }
      })

      // Email content
      const emailMessage = {
        message: {
          subject: `Smart Campus 5G - Yeni Teklif Talebi (${name})`,
          body: {
            contentType: 'HTML',
            content: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                    🏢 Smart Campus 5G
                  </h1>
                  <p style="color: #e8e8e8; margin: 10px 0 0 0; font-size: 16px;">
                    Yeni Teklif Talebi
                  </p>
                </div>
                
                <!-- Content -->
                <div style="padding: 30px; background: #f8f9fa;">
                  <div style="background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
                    <h2 style="color: #333; margin-top: 0; font-size: 22px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
                      📋 İletişim Bilgileri
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555; width: 30%;">👤 Ad Soyad:</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">📧 E-posta:</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">🏢 Kurum/Şirket:</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${company || 'Belirtilmemiş'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; font-weight: 600; color: #555;">⚙️ İlgilendiği Hizmet:</td>
                        <td style="padding: 12px 0; color: #333;">${service || 'Belirtilmemiş'}</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0; font-size: 22px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
                      💬 Mesaj İçeriği
                    </h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                      <p style="line-height: 1.8; color: #555; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Footer -->
                <div style="background: #2c3e50; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                  <p style="color: #ecf0f1; margin: 0; font-size: 14px;">
                    <strong>📅 Gönderim Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}
                  </p>
                  <p style="color: #bdc3c7; margin: 5px 0 0 0; font-size: 12px;">
                    Bu mesaj Smart Campus 5G web sitesi üzerinden gönderilmiştir.
                  </p>
                </div>
              </div>
            `
          },
          toRecipients: [
            {
              emailAddress: {
                address: process.env.EMAIL_USER || 'info@smartcampus5g.com'
              }
            }
          ]
        }
      }

      // Send email via Graph API
      await graphClient.api(`/users/${process.env.EMAIL_USER}/sendMail`).post(emailMessage)
      
      console.log('Email sent successfully via Microsoft Graph API:', {
        name,
        email,
        company,
        message,
        service,
        timestamp: new Date().toISOString()
      })

    } catch (graphError) {
      console.error('Microsoft Graph API error:', graphError)
      // Fallback: Log the form data
      console.log('Form data logged as fallback:', { name, email, company, message, service })
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will contact you soon!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

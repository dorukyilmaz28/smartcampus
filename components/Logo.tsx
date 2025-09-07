'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
  textColor?: string
  showText?: boolean
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  variant = 'full',
  textColor = 'text-neutral-900',
  showText = true
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-20 w-20', 
    lg: 'h-28 w-28',
    xl: 'h-32 w-32'
  }

  const textSizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl', 
    xl: 'text-5xl'
  }

  const Icon = () => (
    <img 
      src="/images/smart-campus-logo.png" 
      alt="SmartCampus5G Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  )

  const Text = () => (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold ${textSizes[size]} ${textColor}`}>
        SmartCampus
      </span>
      <span className={`font-bold ${textSizes[size]} ${textColor}`}>
        5G
      </span>
    </div>
  )

  if (variant === 'icon') {
    return <Icon />
  }
  
  if (variant === 'text') {
    return <Text />
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Icon />
      {showText && <Text />}
    </div>
  )
}

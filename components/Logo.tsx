'use client'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  variant = 'full' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  }

  const Icon = () => (
    <svg 
      viewBox="0 0 100 100" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ana Bina Silüeti */}
      <rect 
        x="20" 
        y="30" 
        width="60" 
        height="50" 
        rx="4" 
        fill="currentColor"
        className="text-neutral-900"
      />
      
      {/* Modern Bina Detayları */}
      <rect 
        x="25" 
        y="35" 
        width="50" 
        height="40" 
        rx="2" 
        fill="currentColor"
        className="text-neutral-700"
      />
      
      {/* Akıllı Pencere Grid */}
      <rect x="30" y="40" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="42" y="40" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="54" y="40" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="66" y="40" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      
      <rect x="30" y="52" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="42" y="52" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="54" y="52" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="66" y="52" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      
      <rect x="30" y="64" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="42" y="64" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="54" y="64" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      <rect x="66" y="64" width="8" height="8" rx="1" fill="currentColor" className="text-neutral-500" />
      
      {/* IoT Sensör Noktaları */}
      <circle cx="35" cy="45" r="1.5" fill="currentColor" className="text-green-500" />
      <circle cx="47" cy="57" r="1.5" fill="currentColor" className="text-green-500" />
      <circle cx="59" cy="69" r="1.5" fill="currentColor" className="text-green-500" />
      
      {/* Akıllı Anten */}
      <rect x="48" y="25" width="4" height="8" rx="2" fill="currentColor" className="text-neutral-600" />
      <circle cx="50" cy="20" r="2" fill="currentColor" className="text-blue-500" />
      
      {/* Güneş Paneli */}
      <rect x="15" y="15" width="12" height="8" rx="1" fill="currentColor" className="text-yellow-500" />
      <rect x="16" y="16" width="2" height="6" fill="currentColor" className="text-yellow-600" />
      <rect x="19" y="16" width="2" height="6" fill="currentColor" className="text-yellow-600" />
      <rect x="22" y="16" width="2" height="6" fill="currentColor" className="text-yellow-600" />
      <rect x="25" y="16" width="2" height="6" fill="currentColor" className="text-yellow-600" />
      
      {/* Veri Akışı Çizgileri */}
      <path 
        d="M50 20 Q60 15 70 20" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        className="text-blue-400"
        strokeDasharray="2,2"
      />
      <path 
        d="M35 45 Q45 40 55 45" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none" 
        className="text-green-400"
        strokeDasharray="1,1"
      />
    </svg>
  )

  const Text = () => (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`font-semibold ${textSizes[size]} text-neutral-900`}>
        Future
      </span>
      <span className={`font-light ${textSizes[size]} text-neutral-600`}>
        Smart Campus
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
      <Text />
    </div>
  )
}

import { Code } from 'lucide-react'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Code className='h-8 w-8 text-primary' />
      <span className='font-bold text-xl'>Dhanu Bor</span>
    </div>
  )
}

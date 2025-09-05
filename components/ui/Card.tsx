import { cn } from '@/components/utils/cn'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export default function Card({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...props} className={cn('rounded-2xl bg-bgSoft/80 border border-white/10 shadow-card', className)}>
      {children}
    </div>
  )
}


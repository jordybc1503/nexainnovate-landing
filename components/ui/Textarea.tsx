import { cn } from '@/components/utils/cn'
import type { TextareaHTMLAttributes } from 'react'

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props
  return <textarea {...rest} className={cn('w-full bg-bgSoft border border-white/10 rounded-xl px-3 py-2 text-sm placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-brand-600', className)} />
}


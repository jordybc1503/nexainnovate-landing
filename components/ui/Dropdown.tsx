"use client"
import { useEffect, useRef, useState } from 'react'

export function Dropdown({ trigger, children }: { trigger: React.ReactNode, children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])
  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen(v => !v)}>{trigger}</div>
      {open && (
        <div className="absolute left-0 mt-2 rounded-2xl bg-bgSoft border border-white/10 shadow-card">
          {children}
        </div>
      )}
    </div>
  )
}


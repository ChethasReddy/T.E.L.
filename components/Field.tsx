interface FieldProps {
  label: string
  value: string
  full?: boolean
}

export default function Field({ label, value, full = false }: FieldProps) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted">{label}</div>
      <div className="text-sm text-ink mt-1 leading-relaxed">{value}</div>
    </div>
  )
}

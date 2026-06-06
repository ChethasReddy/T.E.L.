interface SumRowProps {
  label: string
  value: string
}

export default function SumRow({ label, value }: SumRowProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-muted font-medium text-xs uppercase tracking-wider">{label}</span>
      <span className="text-ink font-semibold text-right">{value}</span>
    </div>
  )
}

import { CheckCircle } from "lucide-react"




export const Verified = () => {
  return (
    <div className="flex items-center gap-4 tw-font-medium text-green-500">
        <CheckCircle size={14} />
        <p>Verified</p>
    </div>
  )
}

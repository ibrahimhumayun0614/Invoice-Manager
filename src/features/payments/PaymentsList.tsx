import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function PaymentsList() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3.5">
        <Card className="p-4 shadow-sm border-gray-200">
           <div className="text-xs text-gray-400 mb-1">Total Received</div>
           <div className="text-2xl font-semibold text-green-600">$124,580</div>
        </Card>
      </div>
      
      <Card className="rounded-xl overflow-hidden shadow-sm">
         <div className="p-5 flex items-center justify-between">
            <span className="text-sm text-gray-500">Payments mock table</span>
            <Link to="/payments/record" className="bg-primary text-white rounded-md px-3 py-1.5 text-xs">Record Payment</Link>
         </div>
      </Card>
    </div>
  )
}

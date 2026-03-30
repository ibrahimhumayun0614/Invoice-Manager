import { Card } from '@/components/ui/card'
import { useStore } from '@/store/useStore'

export default function Clients() {
  const clients = useStore(state => state.clients)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3.5">
        <Card className="p-4 shadow-sm border-gray-200">
           <div className="text-xs text-gray-400 mb-1">Total Clients</div>
           <div className="text-2xl font-semibold">{clients.length}</div>
        </Card>
        <Card className="p-4 shadow-sm border-gray-200">
           <div className="text-xs text-gray-400 mb-1">Active This Month</div>
           <div className="text-2xl font-semibold">{clients.length > 0 ? clients.length : 18}</div>
        </Card>
        <Card className="p-4 shadow-sm border-gray-200">
           <div className="text-xs text-gray-400 mb-1">Total Revenue</div>
           <div className="text-2xl font-semibold">$248,500</div>
        </Card>
        <Card className="p-4 shadow-sm border-red-200 bg-red-50/50">
           <div className="text-xs text-red-500 mb-1">Outstanding</div>
           <div className="text-2xl font-semibold text-red-600">$26,670</div>
        </Card>
      </div>
      
      <Card className="rounded-xl overflow-hidden shadow-sm">
         <div className="p-5 flex items-center justify-center text-sm text-gray-500 h-32">
             Client table will map over {clients.length} clients...
         </div>
      </Card>
    </div>
  )
}

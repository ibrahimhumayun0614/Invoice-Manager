import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight, FileText, CheckCircle2, Clock, AlertTriangle, Wallet } from 'lucide-react'
import { useStore } from '@/store/useStore'

export default function Dashboard() {
  const invoices = useStore(state => state.invoices)

  const totalRevenue = invoices.filter(inv => inv.status === 'paid').reduce((acc, inv) => acc + inv.amount, 0)
  const paidCount = invoices.filter(inv => inv.status === 'paid').length
  const pendingCount = invoices.filter(inv => inv.status === 'pending').length
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((acc, inv) => acc + inv.amount, 0)
  const overdueCount = invoices.filter(inv => inv.status === 'overdue').length
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((acc, inv) => acc + inv.amount, 0)
  
  const outstandingCount = pendingCount + overdueCount
  const outstandingAmount = pendingAmount + overdueAmount

  const formatSec = (num: number) => num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-3.5">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
              <Wallet className="w-3.5 h-3.5" /> Total Revenue
            </div>
            <div className="text-2xl font-semibold tracking-tight">${formatSec(totalRevenue)}</div>
            <div className="text-[11px] text-green-600 mt-1 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> Based on {paidCount} paid invoices
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Paid Invoices
            </div>
            <div className="text-2xl font-semibold tracking-tight">{paidCount}</div>
            <div className="text-[11px] text-green-600 mt-1 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> All time
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
              <Clock className="w-3.5 h-3.5" /> Pending Invoices
            </div>
            <div className="text-2xl font-semibold tracking-tight">{pendingCount}</div>
            <div className="text-[11px] text-gray-400 mt-1">Worth ${formatSec(pendingAmount)}</div>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs text-red-600 mb-2 font-medium">
              <AlertTriangle className="w-3.5 h-3.5" /> Overdue
            </div>
            <div className="text-2xl font-semibold tracking-tight text-red-600">{overdueCount}</div>
            <div className="text-[11px] text-red-600 mt-1">${formatSec(overdueAmount)} outstanding</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
              <FileText className="w-3.5 h-3.5" /> Outstanding
            </div>
            <div className="text-2xl font-semibold tracking-tight">${formatSec(outstandingAmount)}</div>
            <div className="text-[11px] text-gray-400 mt-1">{outstandingCount} invoices pending</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex gap-2.5">
        <div className="px-4 py-2 rounded-md border border-primary bg-primary text-white text-[13px] font-medium cursor-pointer">
          + Create Invoice
        </div>
        <div className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 text-[13px] font-medium cursor-pointer hover:border-primary hover:text-primary transition-colors">
          + New Quotation
        </div>
        <div className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 text-[13px] font-medium cursor-pointer hover:border-primary hover:text-primary transition-colors">
          + Add Client
        </div>
      </div>
    </div>
  )
}

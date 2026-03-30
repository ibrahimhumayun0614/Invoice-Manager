import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useStore } from '@/store/useStore'
import { FileText, Edit2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function InvoicesList() {
  const invoices = useStore(state => state.invoices)
  return (
    <Card className="rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-gray-100 bg-white">
        <select className="bg-gray-100 border-none rounded-md px-2.5 py-1.5 text-xs text-gray-500 outline-none cursor-pointer">
          <option>All Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
          <option>Draft</option>
        </select>
        <select className="bg-gray-100 border-none rounded-md px-2.5 py-1.5 text-xs text-gray-500 outline-none cursor-pointer">
          <option>Date Range</option>
        </select>
        <select className="bg-gray-100 border-none rounded-md px-2.5 py-1.5 text-xs text-gray-500 outline-none cursor-pointer">
          <option>All Clients</option>
        </select>
        <div className="ml-auto text-xs text-gray-400">{invoices.length} invoices</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Invoice</th>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Client</th>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Amount</th>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Status</th>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Due Date</th>
              <th className="px-4 py-3 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50/50 group border-b border-gray-50 last:border-0">
                <td className="px-4 py-3 relative">
                  <div className="font-medium text-[13px] text-gray-900">{inv.id}</div>
                  <div className="text-[12px] text-gray-400 mt-0.5">{inv.date}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-[13px] text-gray-900">{inv.client}</div>
                  <div className="text-[12px] text-gray-400 mt-0.5">{inv.clientEmail}</div>
                </td>
                <td className="px-4 py-3 font-mono font-medium text-[13px]">
                  ${inv.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3">
                  <Badge variant={inv.status === 'paid' ? 'success' : inv.status === 'pending' ? 'pending' : inv.status === 'overdue' ? 'error' : 'neutral'} className="capitalize">
                    {inv.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className={`text-[13px] ${inv.status === 'overdue' ? 'text-red-600 font-medium' : 'text-gray-900'}`}>{inv.dueDate}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                     <button className="p-1.5 rounded-md border border-gray-200 text-gray-500 hover:text-primary hover:border-primary bg-white">
                        <FileText className="w-3.5 h-3.5" />
                     </button>
                     <button className="p-1.5 rounded-md border border-gray-200 text-gray-500 hover:text-primary hover:border-primary bg-white">
                        <Edit2 className="w-3.5 h-3.5" />
                     </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-5 py-3 border-top border-gray-100 bg-white">
         <span className="text-xs text-gray-400">Showing 1–{invoices.length} of {invoices.length} invoices</span>
         <div className="flex gap-1">
             <Link to="/invoices/create" className="px-3 py-1.5 bg-primary text-white text-xs rounded-md">Create New</Link>
         </div>
      </div>
    </Card>
  )
}

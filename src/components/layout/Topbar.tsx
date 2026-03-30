import { Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageInfo: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Welcome back! Here is your business overview.' },
  '/invoices': { title: 'Invoices', subtitle: 'Manage all your invoices' },
  '/invoices/create': { title: 'Create Invoice', subtitle: 'Fill in the details to create a new invoice' },
  '/clients': { title: 'Clients', subtitle: 'Manage your clients' },
  '/quotations': { title: 'Quotations', subtitle: 'Create and manage quotes' },
  '/payments': { title: 'Payments', subtitle: 'Track payment history' },
  '/payments/record': { title: 'Record Payment', subtitle: 'Log a payment received from a client' },
  '/settings': { title: 'Settings', subtitle: 'Configure your account' },
}

export default function Topbar() {
  const location = useLocation()
  const info = pageInfo[location.pathname] || { title: 'InvoiceFlow', subtitle: '' }

  return (
    <div className="bg-white border-b border-gray-200 px-7 h-[58px] flex items-center justify-between shrink-0">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">{info.title}</h1>
        <p className="text-xs text-gray-400 mt-[1px]">{info.subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5 text-[13px] text-gray-400 min-w-[220px]">
          <Search className="w-3.5 h-3.5" />
          <input 
            type="text" 
            placeholder="Search invoices, clients..." 
            className="bg-transparent border-none outline-none text-gray-700 w-full placeholder:text-gray-400"
          />
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-[13px] shrink-0">
          JD
        </div>
      </div>
    </div>
  )
}

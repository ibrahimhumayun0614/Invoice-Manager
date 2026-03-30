import { NavLink } from 'react-router-dom'
import { LayoutDashboard, FileText, Users, FileSignature, CreditCard, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Invoices', path: '/invoices', icon: FileText },
  { name: 'Clients', path: '/clients', icon: Users },
  { name: 'Quotations', path: '/quotations', icon: FileSignature },
  { name: 'Payments', path: '/payments', icon: CreditCard },
  { name: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-[210px] bg-white border-r border-gray-200 flex flex-col py-5 shrink-0">
      <div className="flex items-center gap-2.5 px-5 pb-6">
        <div className="w-9 h-9 bg-primary rounded-xl shrink-0" />
        <span className="font-semibold text-base tracking-tight">InvoiceFlow</span>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 py-2.5 px-5 transition-colors font-medium border-l-2",
                isActive 
                  ? "bg-primary/10 text-primary border-primary" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-normal"
              )
            }
          >
            <item.icon className="w-[18px] h-[18px] opacity-80" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

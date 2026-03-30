export const mockClients = [
  { id: '1', name: 'TechStart Inc', email: 'contact@techstart.io', phone: '+1 555-0123', initials: 'TC', color: 'bg-purple-light text-purple' },
  { id: '2', name: 'Acme Corporation', email: 'billing@acme.com', phone: '+1 555-0456', initials: 'AC', color: 'bg-amber-light text-amber-700' },
  { id: '3', name: 'Global Solutions Ltd', email: 'finance@globalsol.co', phone: '+1 555-0789', initials: 'GS', color: 'bg-green-light text-green-700' },
  { id: '4', name: 'Bright Ideas Agency', email: 'pay@brightideas.co', phone: '+1 555-0321', initials: 'BI', color: 'bg-red-light text-red-700' },
]

export const mockInvoices = [
  { id: 'INV-2026-0045', date: 'Mar 28, 2026', client: 'TechStart Inc', clientEmail: 'contact@techstart.io', amount: 4500.00, status: 'paid', dueDate: 'Mar 30, 2026' },
  { id: 'INV-2026-0044', date: 'Mar 26, 2026', client: 'Acme Corporation', clientEmail: 'billing@acme.com', amount: 12800.00, status: 'pending', dueDate: 'Apr 10, 2026' },
  { id: 'INV-2026-0043', date: 'Mar 22, 2026', client: 'Global Solutions Ltd', clientEmail: 'finance@globalsol.co', amount: 8250.00, status: 'overdue', dueDate: 'Mar 25, 2026' },
  { id: 'INV-2026-0042', date: 'Mar 20, 2026', client: 'Bright Ideas Agency', clientEmail: 'pay@brightideas.co', amount: 3200.00, status: 'paid', dueDate: 'Mar 28, 2026' },
  { id: 'INV-2026-0041', date: 'Mar 18, 2026', client: 'Nova Digital', clientEmail: 'accounts@novadig.com', amount: 6750.00, status: 'draft', dueDate: '—' },
]

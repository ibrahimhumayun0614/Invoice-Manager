import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { mockClients, mockInvoices } from '../lib/mockData'

export type Client = {
  id: string
  name: string
  email: string
  phone: string
  initials: string
  color: string
}

export type Invoice = {
  id: string
  date: string
  client: string
  clientEmail: string
  amount: number
  status: 'paid' | 'pending' | 'overdue' | 'draft'
  dueDate: string
}

export type Payment = {
  id: string
  client: string
  invoiceRef: string
  amount: number
  method: string
  date: string
  status: 'completed' | 'pending'
}

type StoreState = {
  clients: Client[]
  invoices: Invoice[]
  payments: Payment[]
  addClient: (client: Client) => void
  addInvoice: (invoice: Invoice) => void
  recordPayment: (payment: Payment) => void
  updateInvoiceStatus: (id: string, status: Invoice['status']) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set: any) => ({
      clients: mockClients, // Initialize with mock data
      invoices: mockInvoices as Invoice[],
      payments: [
        { id: '1', client: 'Acme Corporation', invoiceRef: 'INV-2026-0042', amount: 4500.00, method: 'Bank Transfer', date: 'Mar 28, 2026', status: 'completed' },
        { id: '2', client: 'TechStart Inc', invoiceRef: 'INV-2026-0040', amount: 3200.00, method: 'Credit Card', date: 'Mar 27, 2026', status: 'completed' }
      ],
      addClient: (client: Client) => set((state: StoreState) => ({ clients: [...state.clients, client] })),
      addInvoice: (invoice: Invoice) => set((state: StoreState) => ({ invoices: [...state.invoices, invoice] })),
      updateInvoiceStatus: (id: string, status: Invoice['status']) => set((state: StoreState) => ({
        invoices: state.invoices.map((inv: Invoice) => (inv.id === id ? { ...inv, status } : inv))
      })),
      recordPayment: (payment: Payment) => set((state: StoreState) => {
        // Also update the invoice status if needed
        const updatedInvoices = state.invoices.map((inv: Invoice) => 
          inv.id === payment.invoiceRef ? { ...inv, status: 'paid' as const } : inv
        );
        return { 
          payments: [...state.payments, payment],
          invoices: updatedInvoices
        };
      }),
    }),
    {
      name: 'invoice-flow-storage', // name of the item in the storage (must be unique)
    }
  )
)

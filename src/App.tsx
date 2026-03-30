import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './features/dashboard/Dashboard'
import InvoicesLayout from './features/invoices/InvoicesLayout'
import InvoicesList from './features/invoices/InvoicesList'
import CreateInvoice from './features/invoices/CreateInvoice'
import Clients from './features/clients/Clients'
import Quotations from './features/quotations/Quotations'
import PaymentsLayout from './features/payments/PaymentsLayout'
import PaymentsList from './features/payments/PaymentsList'
import RecordPayment from './features/payments/RecordPayment'
import Settings from './features/settings/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="invoices" element={<InvoicesLayout />}>
             <Route index element={<InvoicesList />} />
             <Route path="create" element={<CreateInvoice />} />
          </Route>
          <Route path="clients" element={<Clients />} />
          <Route path="quotations" element={<Quotations />} />
          <Route path="payments" element={<PaymentsLayout />}>
             <Route index element={<PaymentsList />} />
             <Route path="record" element={<RecordPayment />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

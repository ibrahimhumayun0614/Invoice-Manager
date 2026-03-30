import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Trash2, ChevronDown, Check, CreditCard, Send, FileText } from 'lucide-react'

export default function CreateInvoice() {
  const [items, setItems] = useState([{ desc: 'Website Development', qty: 1, rate: 3500 }])

  const subtotal = items.reduce((acc, item) => acc + item.qty * item.rate, 0)
  const vat = subtotal * 0.05
  const total = subtotal + vat

  return (
    <div className="grid grid-cols-[1fr_280px] gap-5 items-start">
      <div className="space-y-4">
        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 font-semibold text-sm">Client Information</div>
          <div className="p-5">
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none appearance-none cursor-pointer focus:border-primary">
                <option>Select a client or add new...</option>
                <option>Acme Corporation</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="text-xs text-gray-400 mt-1.5">Or create a new client by typing their details</div>
          </div>
        </Card>

        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 font-semibold text-sm">Invoice Details</div>
          <div className="p-5 grid grid-cols-3 gap-3.5">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Invoice Number</label>
              <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-primary" defaultValue="INV-2026-0046" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Invoice Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-primary" defaultValue="2026-03-30" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Due Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-primary" defaultValue="2026-04-29" />
            </div>
          </div>
        </Card>

        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 font-semibold text-sm">Line Items</div>
          <div className="p-5">
            <table className="w-full mb-2">
              <thead>
                <tr>
                  <th className="text-left text-[11px] font-medium text-gray-400 uppercase pb-2 border-b border-gray-200 w-[45%]">Description</th>
                  <th className="text-right text-[11px] font-medium text-gray-400 uppercase pb-2 border-b border-gray-200">Qty</th>
                  <th className="text-right text-[11px] font-medium text-gray-400 uppercase pb-2 border-b border-gray-200">Rate</th>
                  <th className="text-right text-[11px] font-medium text-gray-400 uppercase pb-2 border-b border-gray-200">Amount</th>
                  <th className="border-b border-gray-200"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td className="py-2"><input className="w-full border border-gray-200 rounded-md px-2.5 py-1.5 text-[13px]" defaultValue={item.desc} /></td>
                    <td className="py-2 pl-2"><input className="w-16 border border-gray-200 rounded-md px-2.5 py-1.5 text-[13px] text-right ml-auto" defaultValue={item.qty} /></td>
                    <td className="py-2 pl-2"><input className="w-24 border border-gray-200 rounded-md px-2.5 py-1.5 text-[13px] text-right ml-auto" defaultValue={`$${item.rate}`} /></td>
                    <td className="py-2 text-right text-[13px] font-semibold">${(item.qty * item.rate).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    <td className="py-2 pl-2 text-right"><button className="text-red-500 hover:text-red-600"><Trash2 className="w-4 h-4 inline" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="text-primary text-[13px] font-medium py-2">+ Add Line Item</button>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="p-4 shadow-sm">
          <div className="font-semibold text-sm mb-3.5">Invoice Summary</div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>Subtotal</span><span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>VAT (5%)</span><span>${vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>Discount</span><span className="text-green-600">-$0.00</span>
          </div>
          <div className="flex justify-between text-[15px] font-semibold text-gray-900 mt-2 pt-2.5 border-t border-gray-200">
            <span>Total Due</span><span className="text-lg font-bold text-primary font-mono">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </Card>

        <Card className="p-4 shadow-sm">
          <div className="font-semibold text-sm mb-3.5">Payment Terms</div>
          <div className="relative mb-2">
              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none appearance-none cursor-pointer">
                <option>Net 30</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>
          <div className="text-xs text-gray-400">Payment due 30 days from invoice date</div>
        </Card>

        <Card className="p-4 shadow-sm">
          <div className="font-semibold text-[13px] text-gray-900 mb-3">Quick Actions</div>
          <div className="flex items-center gap-2.5 p-3 border border-gray-200 rounded-md text-[13px] text-gray-700 cursor-pointer hover:border-primary hover:text-primary transition-colors mb-2 bg-white">
            <FileText className="w-4 h-4" /> Preview Invoice
          </div>
          <div className="flex items-center gap-2.5 p-3 border border-gray-200 rounded-md text-[13px] text-gray-700 cursor-pointer hover:border-primary hover:text-primary transition-colors bg-white">
            <Check className="w-4 h-4" /> Save as Template
          </div>
        </Card>
      </div>
    </div>
  )
}

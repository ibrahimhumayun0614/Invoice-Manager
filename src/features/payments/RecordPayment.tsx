import { Card } from '@/components/ui/card'
import { ChevronDown, Check } from 'lucide-react'

export default function RecordPayment() {
  return (
    <div className="grid grid-cols-[1fr_340px] gap-5 items-start">
      <div className="space-y-4">
        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2 font-semibold text-sm">
            <div className="w-7 h-7 rounded-full bg-gray-200" /> Invoice Details
          </div>
          <div className="p-5">
            <label className="block text-xs text-gray-500 mb-1.5 font-medium">Select Invoice *</label>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none appearance-none cursor-pointer focus:border-primary">
                <option>INV-2026-0042 – Acme Corporation</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="text-xs text-gray-400 mt-1.5">Search by invoice number or client name</div>
          </div>
        </Card>

        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 font-semibold text-sm">Payment Amount</div>
          <div className="p-5">
            <div className="grid grid-cols-[1fr_140px] gap-3.5">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Amount Received *</label>
                <div className="flex items-center border-2 border-green-600 rounded-md overflow-hidden">
                  <span className="px-3 py-2 text-[13px] text-green-600 font-semibold bg-green-50">$</span>
                  <input className="w-full border-none px-3 py-2 text-xl font-bold text-green-600 font-mono outline-none" defaultValue="4,500.00" />
                </div>
                <div className="text-xs text-gray-400 mt-1.5">Invoice balance: $4,500.00</div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Currency</label>
                <div className="relative">
                  <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none appearance-none cursor-pointer bg-gray-50 pointer-events-none" defaultValue="USD">
                    <option value="USD">USD</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2 font-semibold text-sm">
            <div className="w-7 h-7 rounded-full bg-amber-100" /> Payment Details
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Payment Method *</label>
                <div className="relative">
                  <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none appearance-none cursor-pointer">
                    <option>Bank Transfer</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">Payment Date *</label>
                <input type="date" className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-primary" defaultValue="2026-03-30" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Transaction Reference</label>
              <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] outline-none focus:border-primary placeholder:text-gray-300" placeholder="e.g. Check #1234, Wire transfer ID" />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="p-4 shadow-sm">
          <div className="font-semibold text-sm mb-3.5">Invoice Summary</div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>Invoice #</span><span className="font-medium text-gray-900 font-mono">INV-2026-0042</span>
          </div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>Client</span><span className="font-medium text-gray-900">Acme Corporation</span>
          </div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600">
            <span>Issue Date</span><span>Mar 15, 2026</span>
          </div>
          <div className="flex justify-between text-[13px] py-1 text-gray-600 mb-2 border-b border-gray-100 pb-3">
            <span>Due Date</span><span>Apr 14, 2026</span>
          </div>
          <div className="flex justify-between text-[14px] font-semibold text-gray-900 pt-1">
            <span>Total Amount</span><span className="text-lg font-bold text-primary font-mono">$4,500.00</span>
          </div>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 text-green-800 font-semibold mb-1.5">
            <Check className="w-4 h-4 stroke-[3px]" /> Full Payment
          </div>
          <div className="text-xs text-green-700 mb-2">This payment will fully settle the invoice balance.</div>
          <div className="flex justify-between text-[13px] text-green-600 font-semibold mt-2 pt-2 border-t border-green-200/50">
            <span>Remaining Balance:</span><span>$0.00</span>
          </div>
        </div>

        <Card className="p-4 shadow-sm">
           <div className="text-[13px] font-semibold text-gray-500 mb-3">Payment Methods</div>
           <div className="grid grid-cols-4 gap-2">
              <div className="p-2 border border-primary bg-primary/10 text-primary rounded-md flex flex-col items-center gap-1 cursor-pointer">
                 <div className="w-8 h-5 rounded-sm bg-blue-100" />
                 <span className="text-[11px] font-medium">Bank</span>
              </div>
              <div className="p-2 border border-gray-200 text-gray-500 rounded-md flex flex-col items-center gap-1 cursor-pointer hover:border-gray-300">
                 <div className="w-8 h-5 rounded-sm bg-sky-100" />
                 <span className="text-[11px] font-medium">Card</span>
              </div>
              <div className="p-2 border border-gray-200 text-gray-500 rounded-md flex flex-col items-center gap-1 cursor-pointer hover:border-gray-300">
                 <div className="w-8 h-5 rounded-sm bg-amber-100" />
                 <span className="text-[11px] font-medium">Check</span>
              </div>
              <div className="p-2 border border-gray-200 text-gray-500 rounded-md flex flex-col items-center gap-1 cursor-pointer hover:border-gray-300">
                 <div className="w-8 h-5 rounded-sm bg-green-100" />
                 <span className="text-[11px] font-medium">Cash</span>
              </div>
           </div>
        </Card>
      </div>
    </div>
  )
}

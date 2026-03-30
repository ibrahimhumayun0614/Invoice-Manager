export default function Settings() {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-5 items-start">
       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
           <div className="px-3 py-2 text-[13px] text-gray-700 bg-gray-50 font-medium rounded-md mb-0.5">Company</div>
           <div className="px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md cursor-pointer mb-0.5 transition-colors">Invoice Settings</div>
           <div className="px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md cursor-pointer mb-0.5 transition-colors">Email Settings</div>
           <div className="px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md cursor-pointer mb-0.5 transition-colors">Notifications</div>
           <div className="px-3 py-2 text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md cursor-pointer transition-colors">Security</div>
       </div>
       <div className="space-y-4">
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
               <h3 className="text-[15px] font-semibold mb-1 tracking-tight">Company Information</h3>
               <p className="text-xs text-gray-400 mb-4">Basic information about your business</p>
               
               <div className="flex gap-5 mb-4 items-start">
                   <div>
                       <label className="text-xs text-gray-500 font-medium mb-1.5 block">Company Logo</label>
                       <div className="w-20 h-20 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-[11px] text-gray-400 cursor-pointer hover:border-primary">Upload</div>
                   </div>
                   <div className="flex-1">
                       <label className="text-xs text-gray-500 font-medium mb-1.5 block">Company Name</label>
                       <input className="w-full text-[13px] border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-primary transition-colors hover:border-gray-300" defaultValue="Acme Technologies Inc." />
                   </div>
               </div>
               
               <div className="mb-4">
                   <label className="text-xs text-gray-500 font-medium mb-1.5 block">Business Address</label>
                   <input className="w-full text-[13px] border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-primary" defaultValue="123 Business Ave, Suite 100, San Francisco, CA 94102" />
               </div>
               
               <div className="grid grid-cols-3 gap-3.5">
                   <div>
                       <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                       <input className="w-full text-[13px] border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-primary" defaultValue="billing@acmetech.com" />
                   </div>
                   <div>
                       <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number</label>
                       <input className="w-full text-[13px] border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-primary" defaultValue="+1 (555) 123-4567" />
                   </div>
                   <div>
                       <label className="text-xs text-gray-500 font-medium mb-1.5 block">Tax ID / VAT Number</label>
                       <input className="w-full text-[13px] border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-primary" defaultValue="US123456789" />
                   </div>
               </div>
           </div>
       </div>
    </div>
  )
}

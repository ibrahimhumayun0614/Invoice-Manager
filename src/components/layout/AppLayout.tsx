import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden text-gray-900 font-sans text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

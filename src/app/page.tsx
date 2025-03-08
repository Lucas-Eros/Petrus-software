import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 border-r border-gray-200">
          <Sidebar />
        </div>

        <div className="flex-1 bg-gray-50">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

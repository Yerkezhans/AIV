import Sidebar from "./components/Sidebar";
import Events from "./components/Events"; 

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <Events /> 
      </main>
    </div>
  );
}
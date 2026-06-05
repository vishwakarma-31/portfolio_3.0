import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-32">
        <Services />
      </div>
      <footer className="py-12 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Aryan Vishwakarma. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

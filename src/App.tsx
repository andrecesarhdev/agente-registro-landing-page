import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WhatsAppButton from "./components/ui/WhatsappButton";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Home />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
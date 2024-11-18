import Header from "./Header";
import WhatsAppButton from "./WhatsappButton";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Header />
      <main className="flex-1 pt-24 px-4 lg:px-24">{children}</main>
      <WhatsAppButton />
    </div>
  );
}

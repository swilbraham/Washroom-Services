import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ChatBot } from "@/components/chatbot/ChatBot";
import { CartProvider } from "@/lib/cart-store";
import { CustomerAuthProvider } from "@/lib/auth-store";
import { OrderProvider } from "@/lib/order-store";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomerAuthProvider>
      <CartProvider>
        <OrderProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <ChatBot />
        </OrderProvider>
      </CartProvider>
    </CustomerAuthProvider>
  );
}

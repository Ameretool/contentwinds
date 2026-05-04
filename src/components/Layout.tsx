import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-card border border-border/60 rounded-2xl shadow-sm p-6 sm:p-10">
          {children}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

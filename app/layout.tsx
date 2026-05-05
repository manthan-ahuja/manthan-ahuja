import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>
          <main className="mx-auto min-h-screen max-w-7xl px-6 py-10">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}

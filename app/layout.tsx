// app/layout.tsx

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Mijn Onepager Website',
  description: 'Een demonstratie van Next.js 14 met Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

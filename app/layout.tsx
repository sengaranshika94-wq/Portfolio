import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Anshika Sengar — Full-Stack Developer',
  description:
    'BCA student and aspiring Full-Stack Developer building practical web experiences with React, Node.js, and modern AI technologies.',
  openGraph: {
    title: 'Anshika Sengar — Full-Stack Developer',
    description:
      'BCA student and aspiring Full-Stack Developer building practical web experiences with React, Node.js, and modern AI technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

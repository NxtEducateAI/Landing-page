import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#070B14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NxtEducate AI — The Future of Intelligent School Management",
  description:
    "One unified, AI-powered ecosystem connecting Schools, Administrators, Teachers, Parents, and Students. Enterprise-grade school management, reimagined with AI.",
  keywords: [
    "AI school management",
    "School ERP",
    "NxtEducate",
    "Education Platform",
    "Student Information System",
    "CBSE ICSE school software",
    "Attendance AI",
    "Automated timetable",
  ],
  authors: [{ name: "NxtEducate AI" }],
  openGraph: {
    title: "NxtEducate AI — The Future of Intelligent School Management",
    description:
      "Enterprise, AI-powered School Management Platform empowering schools, teachers, parents, and students.",
    url: "https://nxteducate.ai",
    siteName: "NxtEducate AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NxtEducate AI — The Future of Intelligent School Management",
    description:
      "One unified, AI-powered ecosystem connecting Schools, Administrators, Teachers, Parents, and Students.",
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('nxt-theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-500/30 selection:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

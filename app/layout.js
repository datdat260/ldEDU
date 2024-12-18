import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Trường Đại học Lao động - Xã hội (Cơ sở II)",
  description: "Đào tạo - Nghiên cứu - Phát triển nguồn nhân lực chất lượng cao tại Cơ sở II TP.HCM",
  keywords: [
    "đại học lao động xã hội",
    "ulsa csii",
    "đh lđxh cơ sở 2",
    "trường đại học lao động xã hội",
    "đại học lao động xã hội tphcm",
    "tuyển sinh đại học lao động xã hội"
  ],
  authors: [{ name: "Trường ĐH Lao động - Xã hội CSII" }],
  creator: "Trường ĐH Lao động - Xã hội CSII",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: 'Trường Đại học Lao động - Xã hội (Cơ sở II)',
    description: 'Đào tạo - Nghiên cứu - Phát triển nguồn nhân lực chất lượng cao',
    url: 'https://ld.edu.vn',
    siteName: 'Trường ĐH Lao động - Xã hội CSII',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
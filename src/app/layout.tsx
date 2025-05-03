import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Home",
    openGraph: {
        title: "Home",
        description: "Home",
        images: ['https://avatars.githubusercontent.com/u/98983620?v=4']
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        noarchive: true,
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>

      <Header/>

        {children}

      <Footer/>
      </body>
    </html>
  );
}

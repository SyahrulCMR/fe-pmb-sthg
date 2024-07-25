import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/navbar";
import FooterComponent from "@/components/footer/footer";
import CopyRight from "@/components/copy-right/copy-right";
import HelpContent from "@/components/content/help-content/help-content";
import { Toaster } from "@/components/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Portal Pendaftaran Mahasiswa | STHG",
  description:
    "Portal untuk mendaftar sebagai mahasiswa baru atau pindahan di Sekilah Tinggi Hukum Galunggung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`bg-[#fbfbfe] ${poppins.variable}`}>
        <main>
          <NavbarComponent />
          {children}

          <section className="pt-12 flex justify-center">
            <div className="container ">
              <HelpContent />
            </div>
          </section>
        </main>

        <footer className="mt-12">
          <FooterComponent />
          <CopyRight />
        </footer>
        <Toaster
          position="top-right"
          toastOptions={{
            // unstyled: true,
            classNames: {
              error: "bg-red-400 text-white",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400 text-white",
            },
          }}
        />
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Santiago Cárdenas | Systems Engineer & Full-Stack Developer",
  description:
    "Official website of Santiago Cárdenas, Systems Engineer, Full-Stack Developer and Cybersecurity Master. Projects, experience and CV.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

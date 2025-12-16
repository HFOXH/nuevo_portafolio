import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SC
          </Link>

          <div className="flex gap-6 text-sm font-medium">
            <Link href="/projects" className="hover:text-blue-600">
              Proyectos
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              Sobre mí
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contacto
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

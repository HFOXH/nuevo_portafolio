import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <Container>
        <div className="py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Santi. Hecho con Next.js y café ☕
        </div>
      </Container>
    </footer>
  );
}
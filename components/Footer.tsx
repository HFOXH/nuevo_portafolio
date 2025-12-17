import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="mt-10  text-center">
          <p className="font-bold text-[50px]">SC</p>
          <p>Engineer & Developer</p>
        </div>
      </Container>
      <div className="border-t mt-10">
        <Container>
          <div className="py-6 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Santiago Cárdenas. Made with Next.js, coffee ☕ & Love ❤️.
          </div>
        </Container>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

const languages = [
  { code: "es", label: "ES", path: "/", flag: "es" },
  { code: "en", label: "EN", path: "/en", flag: "us" },
  { code: "kr", label: "KR", path: "/kr", flag: "kr" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = languages.find(lang => pathname.startsWith(lang.path) && lang.path !== "/") || languages[0];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-white/10
        bg-black/40 backdrop-blur-xl
      "
    >
      <Container>
        <div className="md:hidden flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-white hover:text-main transition"
          >
            SC
          </Link>
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen((v) => !v)}
              className="
                flex items-center gap-2
                px-3 py-1.5
                rounded-lg
                text-xs font-semibold
                text-white
                border border-white/20
                hover:bg-white/10
                transition
              "
            >
              <Image
                src={`https://flagcdn.com/${currentLang.flag}.svg`}
                alt={currentLang.label}
                width={20}
                height={14}
                className="rounded-sm"
              />
              {currentLang.label}
              <span className="text-[10px]">▾</span>
            </motion.button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute right-0 mt-2
                    w-24
                    rounded-lg
                    bg-neutral-900/90 backdrop-blur
                    border border-white/10
                    shadow-xl
                    overflow-hidden
                  "
                >
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.path}
                      onClick={() => setOpen(false)}
                      className="
                        flex items-center gap-2
                        px-3 py-2
                        text-xs text-white
                        hover:bg-neutral-800
                        transition
                      "
                    >
                      <Image
                        src={`https://flagcdn.com/${lang.flag}.svg`}
                        alt={lang.label}
                        width={20}
                        height={14}
                        className="rounded-sm"
                      />
                      {lang.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <nav className="hidden md:flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-main transition"
          >
            SC
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium text-white">
            {/*[
              { href: "/projects", label: "Proyectos" },
              { href: "/about", label: "Sobre mí" },
              { href: "/contact", label: "Contacto" },
            ].map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-main transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))*/}

            <span className="h-5 w-px bg-white/20" />

            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen((v) => !v)}
                className="
                  flex items-center gap-2
                  px-3 py-1.5
                  rounded-lg
                  text-xs font-semibold
                  text-white
                  border border-white/20
                  hover:bg-white/10
                  transition
                "
              >
                <Image
                  src={`https://flagcdn.com/${currentLang.flag}.svg`}
                  alt={currentLang.label}
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                {currentLang.label}
                <span className="text-[10px]">▾</span>
              </motion.button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute right-0 mt-2
                      w-24
                      rounded-lg
                      bg-neutral-900/90 backdrop-blur
                      border border-white/10
                      shadow-xl
                      overflow-hidden
                    "
                  >
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={lang.path}
                        onClick={() => setOpen(false)}
                        className="
                          flex items-center gap-2
                          px-3 py-2
                          text-xs text-white
                          hover:bg-neutral-800
                          transition
                        "
                      >
                        <Image
                          src={`https://flagcdn.com/${lang.flag}.svg`}
                          alt={lang.label}
                          width={20}
                          height={14}
                          className="rounded-sm"
                        />
                        {lang.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

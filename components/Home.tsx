'use client';

import Container from "@/components/Container";
import TypedText from "@/components/TypedText";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";
import { homeContent, Lang } from "@/i18n/home";

const icons = [
    { icon: LuGithub, link: "https://github.com/HFOXH", altInfo: "GitHub de Santiago Cárdenas" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/santiago-cardenas-sc/", altInfo: "Linkedin de Santiago Cárdenas" },
    { icon: AiOutlineYoutube, link: "https://www.youtube.com/@smartcode-development", altInfo: "Canal Youtube Smart Code" },
    { icon: FaFacebookF, link: "https://web.facebook.com/santiago7cardenas/", altInfo: "Facebook de Santiago Cárdenas" },
    { icon: FaInstagram, link: "#", altInfo: "Instagram de Santiago Cárdenas" },
    { icon: FaWhatsapp, link: "https://api.whatsapp.com/send?phone=573132904901&text=Hola%20Santiago!%20Vi%20tu%20portafolio%2C%20quiero%20hacerte%20una%20oferta%20laboral%20%F0%9F%98%80", altInfo: "Whatsapp de Santiago Cárdenas" }
];

export default function Home({ lang }: { lang: Lang }) {
    const t = homeContent[lang];

    return (
        <section className="min-h-[calc(100vh-rem)] flex items-center py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    <div>
                        <p className="text-white mb-2 text-2xl">
                            {t.intro} <TypedText lang={lang === "es" ? "es" : "en"} />
                        </p>

                        <h1 className="text-4xl md:text-5xl font-semibold">
                            <span className="text-green">{t.name}</span>
                        </h1>

                        <a
                            href={lang === "es" ? "https://santic.netlify.app/assets/doc/Santiago_Cardenas_Ingeniero_Sistemas.pdf.pdf" : "https://santic.netlify.app/assets/doc/SantiagoCardenasCV.pdf"}
                            className="
                group inline-flex items-center gap-2 mt-8 px-8 py-3
                rounded-full border border-main text-main
                transition-colors duration-300
                hover:bg-main hover:text-black
              "
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                {t.download}
                            </span>

                            <HiOutlineCloudDownload className="text-xl opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </a>

                        <div className="flex gap-4 mt-10">
                            {icons.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    aria-label={item.altInfo}
                                    className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full border border-main text-main
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-main hover:text-black
                  "
                                >
                                    <item.icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="https://santic.netlify.app/assets/img/about.png"
                            alt={t.name}
                            width={384}
                            height={384}
                            className="rounded-full object-cover"
                            priority
                            fetchPriority="high"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}

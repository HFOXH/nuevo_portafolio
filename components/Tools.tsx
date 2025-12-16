import Image from "next/image";
import { tools } from "@/constants/tools";
import Container from "./Container";

export default function ToolsSlider() {
    return (
        <section>
            <Container>
                <div className="max-w-6xl mx-auto py-16">
                    <div>
                        <h2 className="text-main text-center mb-4 text-3xl font-semibold py-6">
                            What do I know?
                        </h2>
                    </div>
                    <div className="bg-black-second pt-8 rounded-2xl">
                        <div className="relative overflow-x-hidden overflow-y-visible h-[130px]">
                            <div className="flex gap-10 animate-scroll">
                                {[...tools, ...tools].map((tool, i) => (
                                    <div
                                        key={i}
                                        className="slide flex flex-col items-center min-w-[80px] py-4"
                                    >
                                        <Image
                                            src={tool.icon}
                                            alt={tool.name}
                                            width={56}
                                            height={56}
                                        />

                                        <div className="tooltip">
                                            {tool.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

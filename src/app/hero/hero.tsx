import Image from "next/image";
import AnimatedText from "./animated-text";

export default function Hero() {
  return (
    <section className="h-screen w-screen relative text-white">
      <Image
        src="/hero.jpg"
        alt={"makeup-studio"}
        className="left-0 top-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute left-0 top-0 bg-[rgba(0,0,0,0.7)] h-screen w-screen flex items-center justify-center">
        <AnimatedText />
      </div>
    </section>
  );
}

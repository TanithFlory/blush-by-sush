import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import About from "./about/about";
import Certifications from "./certifications/certifications";
import TagLine from "./tag-line/tag-line";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <TagLine />
    </>
  );
}

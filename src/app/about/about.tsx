import Image from "next/image";
import SectionWrapper from "../utils/section-wrapper/section-wrapper";
import VerticalObject from "../utils/section-wrapper/vertical-object";

export default function About() {
  return (
    <>
      <div className="relative my-[180px]">
        <VerticalObject objectPosition="left" />
        <SectionWrapper>
          <div className="flex gap-[60px] mb-[83px] max-md:flex-wrap">
            <div className="flex-grow-0 flex-shrink-0 basis-[396px] max-xs:basis-[auto] max-xs:w-full max-xs:flex max-xs:justify-center">
              <Image
                src={"/artist.png"}
                width={396}
                height={357}
                alt="Sushmitha Pandith"
                className="h-[357px] w-[396px]  max-xs:w-[320px] max-xs:h-[290px] "
              />
            </div>
            <div className="w-full">
              <h3 className="font-bold text-[24px] mb-[37px] ">
                About Sushmitha Pandith
              </h3>
              <div className="font-extrabold max-xs:text-[35px] text-[55px]">
                Meet Sushmitha Pandith, an Expert in Beauty and Hair Dressing
              </div>
            </div>
          </div>
          <div className="space-y-[40px]">
            <h3 className="font-bold text-[24px]">
              {`'Elevating Beauty and Creativity to New Highlights'`}
            </h3>
            <p>
              {`'Welcome to the world of Zohra Ilyas. Zohra Ilyas is a highly
              skilled and passionate professional in the realms of fashion,
              media, and beauty. With her extensive experience and unwavering
              commitment to excellence, Zohra brings a touch of magic to every
              project she undertakes. From fashion and media makeup
              artistry/styling to casting coordination, outsourcing for filming,
              and blogger management, Zohra offers a range of services tailored
              to your needs.'`}
            </p>
            <p>
              {`'With a wealth of experience across Turkey, Pakistan, India, and
              the UAE, Zohras expertise transcends borders and cultures. Her
              international exposure has honed her skills to perfection,
              allowing her to infuse her work with the rich tapestry of diverse
              landscapes. Zohras artistry is backed by her certifications from
              the renowned London School of Makeup, a testament to her
              unwavering commitment to excellence. With every stroke of her
              brush, Zohra creates captivating transformations that leave a
              lasting impact.'`}
            </p>
            <p>
              {`'When you choose Zohra Ilyas, you choose an artist who understands
              the power of beauty and its ability to tell stories. Experience
              the artistry of Zohra Ilyas and unlock your true potential. With
              her international expertise and London School of Makeup
              certifications, Zohra brings a unique blend of skill, passion, and
              authenticity to every project. Let her transform your vision into
              a reality, where beauty meets creativity and leaves an indelible
              mark on the world. Choose Zohra Ilyas for an unforgettable journey
              of beauty, empowerment, and impactful storytelling.'`}
            </p>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}

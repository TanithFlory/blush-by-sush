import Image from "next/image";
import SectionWrapper from "../utils/section-wrapper/section-wrapper";
import VerticalObject from "../utils/section-wrapper/vertical-object";

export default function Certifications() {
  return (
    <div className="relative mb-[180px]">
      <VerticalObject objectPosition="right" />
      <SectionWrapper>
        <div>
          <h3 className="font-bold text-[24px]">
            {`'Zohra's Certifications from London School of Makeup'`}
          </h3>
          <h2 className="font-extrabold text-[55px] max-w-[558px] w-full">
            Excellence Recognized by Industry Leaders
          </h2>
          <div className="flex items-center gap-[24px] mt-[65px] justify-center flex-wrap">
            {["certificate1", "certificate2"].map((item, key) => (
              <div key={key}>
                <Image
                  src={`/${item}.png`}
                  alt="certificate"
                  width={281}
                  height={203}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

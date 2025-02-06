import SectionWrapper from "../utils/section-wrapper/section-wrapper";
import VerticalObject from "../utils/section-wrapper/vertical-object";

export default function TagLine() {
  return (
    <div className="relative mb-[180px]">
      <VerticalObject objectPosition="left" />
      <SectionWrapper>
        <h2 className="font-extrabold text-[55px] text-center">
          ENHANCE YOUR STYLE, AMPLIFY YOUR PRESENCE
        </h2>
      </SectionWrapper>
    </div>
  );
}

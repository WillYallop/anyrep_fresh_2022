/** @jsx h */
import { h, FunctionalComponent, JSX } from "preact";
import { tw } from "@twind";
import { css } from "twind/css";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperLarge,
} from "../../utils/twind.ts";
// components
import H1 from "../typography/H1.tsx";
import Subtitle from "../typography/Subtitle.tsx";
import Link from "../partials/Link.tsx";
// Islands
import MiniBookForm from "../../islands/MiniBookForm.tsx";

interface SimpleHeroBlockProps {
  title: JSX.Element;
  description: string;
  button: {
    text: string;
    url: string;
  };
}

const SimpleHeroBlock: FunctionalComponent<SimpleHeroBlockProps> = ({
  title,
  description,
  button,
}) => {
  return (
    <section class={tw`${roundedSectionOuter}`}>
      <div
        class={tw`${roundedSectionInner} bg-brandDarkBlue relative min-h-[450px] flex items-center`}
      >
        <div
          class={tw`${wrapperLarge} flex flex-wrap lg:flex-nowrap items-center py-14 lg:py-20 h-full`}
        >
          {/* textarea */}
          <div
            class={tw`flex flex-col items-start w-full lg:w-1/2 lg:pr-10 px-2 md:px-0 z-10 relative`}
          >
            <H1 text={title} background={"dark"} className={"max-w-[550px]"} />
            <Subtitle
              text={description}
              background={"dark"}
              className={tw`max-w-lg mt-7`}
            />
            <Link
              text={button.text}
              href={button.url}
              theme={"white"}
              className={"mt-10 lg:!flex"}
            />
          </div>
          {/* bg  */}
          <span
            class={tw`absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden`}
          >
            <span
              class={tw`absolute block right-0 bottom-0 lg:top-10 bg-brandRed w-[60px] top-auto h-[100px] lg:h-auto !lg:w-[55%] z-0 ${css(
                {
                  clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                }
              )}`}
            ></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroBlock;

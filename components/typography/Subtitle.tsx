/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface SubtitleProps {
  text: string;
  background?: "light" | "dark";
  className?: string;
}

const Subtitle: FunctionalComponent<SubtitleProps> = ({
  text,
  background,
  className,
}) => {
  return (
    <h1
      class={tw`${
        background === "dark" ? "text-titleLight" : "text-titleDark"
      } ${className} text-xl leading-tight  font-medium`}
    >
      {text}
    </h1>
  );
};

Subtitle.defaultProps = {
  background: "light",
  className: "",
};

export default Subtitle;

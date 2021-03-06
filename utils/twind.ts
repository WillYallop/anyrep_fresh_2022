import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup, apply } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) setup(config);

// classes
export const roundedSectionOuter = apply`w-full px-5 pb-5`;
export const roundedSectionInner = apply`rounded-2xl w-full`;

export const wrapperLarge = apply`w-full max-w-[1360px] px-5 md:px-10 mx-auto`;
export const wrapperMedium = apply`w-full max-w-[1160px] px-5 md:px-10 mx-auto`;

export const sectionWrapperSmall = apply`w-full max-w-[800px] mx-auto`;

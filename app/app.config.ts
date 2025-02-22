/* eslint-disable @typescript-eslint/ban-ts-comment */
export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      // @ts-ignore
      primary: "picton",
      neutral: "slate",
    },
    button: {
      slots: {
        // @ts-ignore
        base: "cursor-pointer",
      },
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
    container: {
      base: "px-8",
    },
  },
});

enum FontType {
  sans = "sans",
  mono = "mono",
  display = "display",
}

type Fonts = {
  readonly [K in FontType]: readonly string[];
};

export const fonts = {
  [FontType.sans]: ["Host Grotesk", "sans-serif"],
  [FontType.mono]: ["Jetbrains Mono", "monospace"],
  [FontType.display]: ["Space Mono", "sans-serif"],
} satisfies Fonts;

fonts.display.at(0);
enum FontType {
  sans = "sans",
  mono = "mono",
  display = "display",
}

type Fonts = {
  readonly [K in FontType]:  string[];
};

export const fonts: Fonts = {
  [FontType.sans]: ["Host Grotesk", "sans-serif"],
  [FontType.mono]: ["Jetbrains Mono", "monospace"],
  [FontType.display]: ["Space Mono", "sans-serif"],
};

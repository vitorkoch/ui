enum ColorName {
  accent = "accent",
  base = "base",
  text = "text",
}

type BaseColors = {
  [Key in ColorName]: {
    dark: string;
    light: string;
  };
};

export const baseColors: BaseColors = {
  [ColorName.accent]: {
    light: "hsl(197deg, 97%, 46%)",
    dark: "hsl(189deg, 71%, 73%)",
  },
  [ColorName.base]: {
    light: "hsl(220deg, 23%, 95%)",
    dark: "hsl(240deg, 21%, 15%)",
  },
  [ColorName.text]: {
    light: "hsl(234deg, 16%, 35%)",
    dark: "hsl(226deg, 64%, 88%)",
  },
} as const;

import { themes } from "mdx-deck";

export default {
  ...themes.syntaxHighlighterPrism,
  fonts: {
    body: "Roboto, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: "#23272F",
    background: "#FFFFFF",
    primary: "#087EA4",
  },
  text: {
    heading: { color: "#087EA4" },
  },
  styles: {
    li: {
      lineHeight: "1.5em",
    },
    blockquote: {
      marginTop: 0,
      fontSize: "1rem",
      color: "rgb(64, 71, 86)",
    },
    Footer: {
      textAlign: "center",
      color: "rgb(64, 71, 86)",
    },
  },
};

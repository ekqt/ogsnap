import shiki, { getHighlighter, Lang, Theme } from "shiki";

type Options = {
  lang: Lang;
  theme: Theme;
  showLineNumbers?: boolean;
  add?: string[];
  remove?: string[];
};

export async function highlight(code: string, options: Options) {
  const { theme, lang, ...styleOptions } = options;
  /* ✅ Create a highlighter instance with a theme */
  const highlighter = await getHighlighter({ theme });
  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(code, lang);
  /* ⚠️ Optional: Custom rendering of code blocks */
  return shiki.renderToHtml(tokens, {
    bg:
      theme === "github-dark"
        ? "#011627"
        : highlighter.getBackgroundColor(theme),
    elements: {
      line({ children, className, index }) {
        /* ⚠️ Should use TailwindCSS and then dropping the classes instead */
        return `<span ${generateHTMLAttributes(styleOptions, index)}
         class=${className}>${children}</span>`;
      },
    },
  });
}

function generateHTMLAttributes(
  styleOptions: Omit<Options, "lang" | "theme">,
  index: number
) {
  const { showLineNumbers, add, remove } = styleOptions;
  return [
    showLineNumbers && `data-line=${index + 1}`,
    getArray(add)?.some((n) => n === index + 1) && "data-add-line",
    getArray(remove)?.some((n) => n === index + 1) && "data-remove-line",
  ]
    .filter(Boolean)
    .join(" ");
}

function getArray(add?: string[]) {
  return add?.flatMap((i) => {
    const temp = i.split("-");
    if (temp.length === 1) {
      return +temp;
    }
    const length = +temp[1] - +temp[0] + 1;
    if (length < 0) {
      return +temp[0];
    }
    return Array.from({ length }).map((_, i) => +temp[0] + i);
  });
}

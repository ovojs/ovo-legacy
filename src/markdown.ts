import marked from "marked";

export default function markdown(text: string) {
  return marked(text);
}
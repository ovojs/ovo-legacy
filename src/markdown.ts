import marked from "marked";
import { issuers } from "./store";
import type { Issuer } from "./types";

// @aaA ddd @哈哈 ddd

let map: Map<string, Issuer>;

issuers.subscribe(v => map = v);

marked.use({
  renderer: {
    paragraph: (text: string) => {
      let matched = false;
      let html = text;

      html = html.replace(/@([\u4e00-\u9fa5]|\w)+ /g, tex => {
        matched = true;
        const user = map.get(tex.slice(1).trim());
        return `<a href="${user?.issuer_website || ''}">${tex}</a> `
      });

      html = html.replace(/#(\d+|[a-z,0-9]{7}) /g, tex => {
        matched = true;
        return `<a href="#ovo-${tex.slice(1).trim()}">${tex}</a>`;
      });

      if (matched)
        return "<p>" + html + "</p>";

      return false;
    }
  }
})

export default function tohtml(text: string) {
  return marked(text);
}
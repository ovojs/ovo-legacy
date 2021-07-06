import marked from "marked";
import { users } from "./store";
import type { User } from "./types";

// @aaA ddd @哈哈 ddd

let map: Map<string, User>;

users.subscribe(v => map = v);

marked.use({
  renderer: {
    paragraph: (text: string) => {
      let matched = false;
      let html = text.replace(/@([\u4e00-\u9fa5]|\w)+ /g, tex => {
        matched = true;
        const user = map.get(tex.slice(1).trim());
        return `<a href="${user?.website || ''}">${tex}</a> `
      });

      // html = html.replace(/#\d+ /g, tex => {
      //   matched = true;
      //   return `<a href="#ovo${tex.slice(1).trim()}>${tex}</a>`;
      // })

      if (matched)
        return "<p>" + html + "</p>";

      return false;
    }
  }
})

export default function markdown(text: string) {
  return marked(text);
}
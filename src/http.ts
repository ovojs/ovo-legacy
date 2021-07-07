import type { CommentGetParams, CommentPostParams, Comments, ReplyPostParams, ResponseBody, ResponseBodyComment } from "./types";

type HTTPOptions = {
  server: string,
  timeout?: number
}

export default class HTTP {
  private static server: string;
  private static timeout: number;

  static init(opt: HTTPOptions) {
    this.server = opt.server;
    this.timeout = opt.timeout;
  }

  static async postComment(params: CommentPostParams): Promise<void> {
    const res = await fetchTimeout(`${this.server}/comment`, { method: "POST", timeout: this.timeout });
    try {
      if (!res.ok) {
        throw new Error("error posting comment " + params);
      }
      const body: ResponseBody = await res.json();
      if (body?.errmsg) {
        throw new Error(body.errmsg);
      }
    } catch (e) {
      throw e;
    }
  }

  static async postReply(params: ReplyPostParams): Promise<void> {
    const res = await fetchTimeout(`${this.server}/reply`, { method: "POST", timeout: this.timeout });
    try {
      if (!res.ok) {
        throw new Error("error posting comment " + params);
      }
      const body: ResponseBody = await res.json();
      if (body?.errmsg) {
        throw new Error(body.errmsg);
      }
    } catch (e) {
      throw e;
    }
  }

  static async getComments(params: CommentGetParams): Promise<Comments> {
    const ps = new URLSearchParams();
    ps.set("domain", params.domain);
    ps.set("path", params.path);
    ps.set("page", params.page.toString());
    const res = await fetchTimeout(`${this.server}/comment?${encodeURI(ps.toString())}`, { timeout: this.timeout });
    try {
      if (!res.ok) {
        throw new Error("error getting comments " + params);
      }
      const body: ResponseBodyComment = await res.json();
      if (body?.errmsg) {
        throw new Error(body.errmsg);
      }
      return body;
    } catch (e) {
      throw e;
    }
  }
}

interface FetchOptions extends RequestInit {
  timeout: number
}

async function fetchTimeout(url: string, opt: FetchOptions) {
  let timer = null;

  timer = setTimeout(() => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    throw new Error("timeout");
  }, opt.timeout);

  const res = await fetch(url, opt);

  clearTimeout(timer);
  timer = null;

  return res;
}


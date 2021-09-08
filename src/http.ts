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
    const body = new Blob([JSON.stringify(params)], {type: 'application/json'});
    const res = await fetchTimeout(`${this.server}/comment`, { 
      method: "POST", 
      timeout: this.timeout, 
      body,
      credentials: "include"
    });
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
    const body = new Blob([JSON.stringify(params)], {type: 'application/json'});
    const res = await fetchTimeout(`${this.server}/reply`, { 
      method: "POST", 
      timeout: this.timeout,
      body,
      
    });
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
    ps.set("domain", encodeURIComponent(params.domain));
    ps.set("path", encodeURIComponent(params.path));
    ps.set("page", String(params.page));
    const res = await fetchTimeout(`${this.server}/comment?${ps.toString()}`, { timeout: this.timeout });
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
  const ctrl = new AbortController()

  timer = setTimeout(function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // ctrl.abort();
    throw new Error("timeout");
  }, opt.timeout);

  const res = await fetch(url, {
    signal: ctrl.signal,
    ...opt
  });

  clearTimeout(timer);
  timer = null;

  return res;
}


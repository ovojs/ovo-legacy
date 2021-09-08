import type { Comment, Repliable, Issuer } from "./types";
import { writable } from "svelte/store";

export const reply = writable<Repliable<Comment> | null>(null);

export const issuers = writable<Map<string, Issuer> | null>(null);


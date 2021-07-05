import type { Comment, User } from "./types";
import { writable } from "svelte/store";

export const reply = writable<Comment|null>(null);

export const users = writable<Map<string, User>|null>(null);


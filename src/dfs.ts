interface Nodable {
  children: Nodable[];
}

export function count(nodes: Nodable[]): number {
  let cnt = 0;
  dfs(nodes, (_) => cnt++);
  return cnt;
}

export default function dfs(nodes: Nodable[], cb: (_: Nodable) => void): void {
  if (!nodes || !nodes.length) return;
  for (let i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
    dfs(nodes[i].children, cb);
  }
}
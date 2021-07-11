// A simple EventEmitter singleton.

type Event = (...args: any[]) => void;

export default class EventEmitter {
  private static store: Map<string, Set<Event>>;

  static init() {
    this.store = new Map<string, Set<Event>>();
  }

  static on(namespace: string, event: Event) {
    if (!this.store) this.init();

    if (!this.store.has(namespace))
      this.store.set(namespace, new Set<Event>());

    this.store.get(namespace).add(event);
  }

  static off(namespace: string, event: Event) {
    if (!this.store) throw new Error('nothing to remove');

    this.store.get(namespace).delete(event);
  }

  static emit(namespace: string, ...args: any[]) {
    if (!this.store) throw new Error('nothing to emit');

    const events = this.store.get(namespace);
    if (!events) return;

    events.forEach(function(e: Event) {
      e(...args); // should handle error?
    });
  }
}
const SECOND = 1000;
const MINUTE = 1000 * 60;
const HOUR = 1000 * 60 * 60;
const DAY = 1000 * 60 * 60 * 24;

export function since(datetime: string, pricise: boolean = false) {
  const a = new Date(datetime),
    b = new Date().getTime(),
    d = b - a.getTime();

  if (d < MINUTE) return `${Math.ceil(d / SECOND)} 秒前`;
  if (d < HOUR) return `${Math.ceil(d / MINUTE)} 分钟前`;
  if (d < DAY) return `${Math.ceil(d / HOUR)} 小时前`;

  let formated = `${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`;
  if (pricise) {
    formated += ` ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;
  }
  return formated;
}

export function duration(ms: number) {
  if (ms < SECOND) return '0 秒';
  if (ms < MINUTE) return `${Math.ceil(ms/SECOND)} 秒`;
  if (ms < HOUR) return `${Math.ceil(ms/MINUTE)} 分钟`;
  if (ms < DAY) return `${Math.ceil(ms/HOUR)} 小时`;
  return `${Math.ceil(ms/DAY)} 天`;
}
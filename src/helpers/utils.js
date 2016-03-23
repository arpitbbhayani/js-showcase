export function sleep(time, callback) {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {continue;}
  callback();
}

export default function debouncedSearch(callbackFunction, delay) {
  let timerId;
  return (...arg) => {
    clearTimeout(timerId);
    timerId=setTimeout(() => {
      callbackFunction(...arg);
    }, delay);
  };
}

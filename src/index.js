function debounce(fn, delay, config = {
  runFirst: false
}) {
  let timer = null;
  let isInvolved = false;
  let { runFirst } = config;

  return function (...args) {
    if (runFirst && !isInvolved) {
      fn.apply(this, args);
      isInvolved = true;
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      isInvolved = false;
    }, delay);
  }
}

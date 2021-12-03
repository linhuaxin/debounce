function debounce(fn, delay, config = {
  immediate: false
}) {
  let timer = null;
  let isInvolved = false;

  function _debounce (...args) {
    return new Promise(resolve => {
      if (timer) {
        clearTimeout(timer);
      }

      if (config.immediate && !isInvolved) {
        let result = fn.apply(this, args);
        resolve(result);
        isInvolved = true;
        return;
      }

      timer = setTimeout(() => {
        let result = fn.apply(this, args);
        resolve(result);
        timer = null;
        isInvolved = false;
      }, delay);
    });
  }

  _debounce.cancel = function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      isInvolved = false;
    }
  }

  return _debounce;
}

export const HARevenueTrackerUtils = {
  debounce: function (func, wait) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  SMALL: {
    WIDTH: 420
  },
  isObject: function (item) {
    return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
  },
  deepMerge: function (target, source) {
    let output = Object.assign({}, target);
    if (HARevenueTrackerUtils.isObject(target) && HARevenueTrackerUtils.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (HARevenueTrackerUtils.isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = HARevenueTrackerUtils.deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
};

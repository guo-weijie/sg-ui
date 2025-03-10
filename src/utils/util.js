import Vue from 'vue';
import { isString, isObject } from 'sg-ui/src/utils/types';

import throttleFuc from 'throttle-debounce/throttle';
import debounceFuc from 'throttle-debounce/debounce';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function noop() { };

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
};

export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
};

export const getValueByPath = function (object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};

export const generateId = function () {
  return Math.floor(Math.random() * 10000);
};

export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
export const arrayFindIndex = function (arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

export const arrayFind = function (arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
export const coerceTruthyValueToArray = function (val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

export const isIE = function () {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
};

export const isEdge = function () {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

export const isFirefox = function () {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

export const autoprefixer = function (style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

export const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};

export const capitalize = function (str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const looseEqual = function (a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

export const arrayEquals = function (arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

export const isEqual = function (value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

export function rafThrottle(fn) {
  let locked = false;
  return function (...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

export function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}

export const isMac = function () {
  return !Vue.prototype.$isServer && /macintosh|mac os x/i.test(navigator.userAgent);
};

/**
 * 节流(限制函数的执行频率)
 * @param delay 延迟的时间
 * @param noTrailing 在最后一次调用时是否执行 callback，true 不执行，false 执行
 * @param callback 目标回调函数
 * @param debounceMode
 *
 * dobounceMode: 为 true 时，在被调用时，先执行 callback，在没有被调用时，在指定的延迟之后执行 clear，如果在clear 执行之前继续调用，会重置定时器；为 false 时，在被调用时，不会执行 callback，在指定的延迟之后执行 callback，如果在 callback 执行之前继续调用，会重置定时器
 */
export function throttle(delay, noTrailing, callback, debounceMode) {
  return throttleFuc(delay, noTrailing, callback, debounceMode);
}

/**
 * 去抖(限制函数的执行频率)
 * 限制回掉函数的执行频率，但是不同于 debounce 的是，debounce 能保证在一系列调用的时间内，回调函数只执行一次
 * @param delay 延迟的时间
 * @param atBegin
 * @param callback 目标回调函数
 * atBegin: 为 true 时，在被调用时，会马上执行 callback，如果在延迟时间之前继续调用，不会执行 callback；为 false 时，在被调用时，不会执行 callback，在延迟时间之后会执行 callback，如果在延迟时间之前继续调用，会重置定时器
 */
export function debounce(delay, atBegin, callback) {
  return debounceFuc(delay, atBegin, callback);
}
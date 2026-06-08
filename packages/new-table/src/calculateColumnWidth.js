let canvas = null;
let ctx = null;
function getMaxLength(arr) {
  return arr.reduce((acc, item) => {
    if (item) {
      const calcLen = getTextWidth(item);
      if (acc < calcLen) {
        acc = calcLen;
      }
    }
    return acc;
  }, 0);
}

function getCanvasContext() {
  if (!canvas) {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    ctx.font = "14px Arial";
  }
  return ctx;
}

function getTextWidth(text) {
  if (ctx === null) {
    getCanvasContext();
  }
  return ctx.measureText(text).width;
}

export function calculateColumnWidth(data, label, prop) {
  if (!label && !prop) {
    return "";
  }
  if (!prop || data.length === 0) {
    return Math.ceil(getTextWidth(label) + 34) + "px";
  }
  const arr = data.map((x) => x[prop]);
  if (label) {
    arr.push(label);
  }
  return Math.ceil(getMaxLength(arr) + 34) + "px";
}

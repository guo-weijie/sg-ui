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

export function calculateColumnWidth(data, label, prop, columnConfig = {}) {
  if (!label && !prop) {
    return "";
  }
  // 计算排序/筛选图标所需的额外表头宽度
  let extraWidth = 34;
  if (columnConfig.sortable) {
    extraWidth += 24; // 排序图标宽度
  }
  if (columnConfig.filters || columnConfig['filter-method']) {
    extraWidth += 14; // 筛选图标宽度
  }
  if (!prop || data.length === 0) {
    return Math.ceil(getTextWidth(label) + extraWidth) + "px";
  }
  const arr = data.map((x) => x[prop]);
  if (label) {
    arr.push(label);
  }
  return Math.ceil(getMaxLength(arr) + extraWidth) + "px";
}

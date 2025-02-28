export default {
  bind(el, binding, vnode, oldVnode) {
    // 对话框头部元素
    const headerElement = el.querySelector('.sg-dialog__header');
    // 整个对话框
    const dragDialog = el.querySelector('.sg-dialog');

    headerElement.style.cursor = 'move';

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = dragDialog.currentStyle || window.getComputedStyle(dragDialog, null);

    headerElement.onmousedown = (e) => {

      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - headerElement.offsetLeft;
      const disY = e.clientY - headerElement.offsetTop;
      // 获取到的值带px 正则匹配替换
      let styL, styT;

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        // eslint-disable-next-line
        styL = +sty.left.replace(/\px/g, ''); // 写成/px/g 也行
        // eslint-disable-next-line
        styT = +sty.top.replace(/\px/g, '');
      }

      const defaultLeft = 0 - dragDialog.getBoundingClientRect().left + styL;
      const defaultTop = 0 - dragDialog.getBoundingClientRect().top + styT;
      const defaultRight = document.body.clientWidth -
        (dragDialog.getBoundingClientRect().left - styL) -
        dragDialog.getBoundingClientRect().width;
      const defaultBottom = document.body.clientHeight -
        (dragDialog.getBoundingClientRect().top - styT) -
        dragDialog.getBoundingClientRect().height;

      document.onmousemove = (e1) => {
        // 通过事件委托，计算移动的距离
        const l = e1.clientX - disX;
        const t = e1.clientY - disY;

        const positionLeft = (l + styL) <= defaultLeft
          ? defaultLeft : ((l + styL) >= defaultRight ? defaultRight : (l + styL));
        const positionTop = (t + styT) <= defaultTop
          ? defaultTop : ((t + styT) >= defaultBottom ? defaultBottom : (t + styT));

        // 移动当前元素
        dragDialog.style.left = `${positionLeft}px`;
        dragDialog.style.top = `${positionTop < defaultTop ? defaultTop : positionTop}px`;

        // 将此时的位置传出去
        // binding.value({x: e.pageX, y: e.pageY});
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
};

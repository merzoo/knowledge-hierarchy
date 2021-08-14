/**
 * 获取文档中任意一个元素与document文档顶部的距离
 * 前置知识：
 * 1. Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。 type = 'top' | 'left' | 'right' | 'bottom'
 * 2. Element.getClientRects() 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。DOMRectList {0: DOMRect, length: 1}
 * 3. Node.ownerDocument 只读属性会返回【当前节点】的顶层的 document 文档对象， 包含 documentElement 节点对象 和 <!DocType> 节点
 * 4. clientTop 元素上边框宽度
 * 5. clientLeft 元素左边框宽度
 * 6. clientWidth = contentWidth + padding - scollbarWidht?
 * 7. clientHeight = contentHeight + padding - scollbarWidth?
 */

const offset = (ele) => {
  let result = {
    top: 0,
    left: 0,
  };

  // 如果是IE ，直接不支持
  if (!ele.getClientRects().length) return result;

  // 如果 元素 display === none，返回 {0,0}
  if (window.getComputedStyle(ele)["display"] === "none") return result;

  const eleRect = ele.getBoundingClientRect();
  // document节点对象
  const docElement = ele.ownerDocument.documentElement;

  result = {
    top: eleRect.top + window.scrollY - docElement.clientTop,
    left: eleRect.left + window.scrollX - docElement.clientLeft,
  };

  return result;
};

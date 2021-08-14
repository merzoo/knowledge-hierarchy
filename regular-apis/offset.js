/**
 * 获取文档中任意一个元素与document文档顶部的距离
 * 前置知识(from MDN)：
 * 1. Node.nodeType:  1 (element_node) | 3 (text_node) | 9 document_node
 * 2. Node.parentNode 返回指定的节点在DOM树中的父节点. (可以取代 parentElement 全部功能，因为 node 包含 element_node)
 * 3. HTMLElement.offsetTop  它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离。
 */

const offset = (ele) => {
  // 默认值
  let result = {
    top: 0,
    left: 0,
  };

  // 当前 DOM 节点满足 display === 'none' 时，直接返回 {top: 0, left: 0}
  if (window.getComputedStyle(ele)["display"] === "none") {
    return result;
  }

  let position;

  const getOffset = (node, init) => {
    // 如果不是 元素节点， 即 document_node 对象，递归结束
    if (node.nodeType !== 1) {
      return;
    }

    // 获取当前元素的 position
    position = window.getComputedStyle(node)["position"];

    // 如果是 static 直接跳过找上一级，不累计，第一次除外
    if (typeof init === "undefined" && position === "static") {
      getOffset(node.parentNode);
      return;
    }

    // 元素高度 = 当前元素相对父级高度 +  累计高度  - 当前元素的滚动高度
    result.top = node.offsetTop + result.top - node.scrollTop;
    result.left = node.offsetLeft + result.left - node.scrollLeft;

    // 如果是固定布局 结束
    if (position === "fixed") {
      return;
    }

    // 继续递归
    getOffset(node.parentNode);
  };

  getOffset(ele, true);

  return result;
};

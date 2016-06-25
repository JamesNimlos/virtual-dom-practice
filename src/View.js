'use strict';

import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import htmlToVdom from 'html-to-vdom';

const convertHTML = htmlToVdom({
  VNode: VNode,
  VText: VText
});

export default function ViewBuilder (element, html) {
  let tree = convertHTML(html);
  let node = createElement(tree);
  element.appendChild(node);

  return {
    render: function (newHtml) {
      let newTree = convertHTML(newHtml);
      const patches = diff(tree, newTree);
      node = patch(node, patches);
      tree = newTree;
    }
  };
}
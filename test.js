var origion = [
  {
    id: '1',
    parent: '',
    text: '1111'
  },
  {
    id: '1.1',
    parent: '1',
    text: '1.1'
  },
  {
    id: '1.1.1',
    parent: '1.1',
    text: '1.1.1'
  },
  {
    id: '2',
    parent: '',
    text: '222'
  },
  {
    id: '2.1',
    parent: '2',
    text: '2.1'
  },
  {
    id: '2.1.1',
    parent: '2.1',
    text: '1.1.1'
  },
  {
    id: '3333',
    parent: '1.1.1',
    text: '3333'
  },
  {
    id: '1.1',
    parent: '1',
    text: '1.1'
  },
  {
    id: '1.1.1',
    parent: '1.1',
    text: '1.1.1'
  }
];
var t = [];
function nodesConvert(nodes, o) {
  for (var j = 0; j < nodes.length; j++) {
    if (o.parent == nodes[j].id) {
      if (!nodes[j].hasOwnProperty('nodes')) {
        nodes[j].nodes = [];
      }
      nodes[j].nodes.push(o)
      continue;
    }
    if (nodes[j].nodes && nodes[j].nodes.length) {
      nodesConvert(nodes[j].nodes, o)
    }
  }
}
function convert(o) {
  var nodes = []
  for (var i = 0; i < o.length; i++) {
    // 第一个或者没有父级元素的直接插入到数组中
    if (!t.length || !o[i].parent.length) {
      t.push(o[i])
      continue;
    }
    // 如果目标数组中有数据，找到跟当前元素父元素匹配的数据，作为nodes节点插入
    nodesConvert(t, o[i])
  }

}
convert(origion)
console.log(JSON.stringify(t))
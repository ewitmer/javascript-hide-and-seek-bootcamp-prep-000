function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list').forEach(function(node){
    let current = parseInt(node.innerHTML)
    node.innerHTML = current + n
  })
}

function deepestChild() {
  let nests = document.querySelectorAll('#grand-node div').length - 1;
  return document.querySelectorAll('#grand-node div')[nests]
}




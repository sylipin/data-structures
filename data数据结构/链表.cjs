class CNode {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

class LinkNode {
  constructor() {
    this.count = 0
    this.head = undefined
  }

  push(element) {
    const node = new CNode(element)
    if (this.count === 0) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.count++
  }

  getElementAt(index) {
    if (0 <= index && index < this.count) {
      let currentNode = this.head
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next
      }
      return currentNode
    }
    return undefined
  }

  insert(element, index) {
    let node = new CNode(element)
    if (this.isEmpty()) {
      this.head = node
    } else if (0 <= index && index < this.count) {
      let pre = this.head
      for (let i = 0; i < index; i++) {
        pre = pre.next
      }
      node.next = pre.next
      pre.next = node
    }
    this.count++
  }

  size() {
    return this.count
  }

  clear() {
    this.head = undefined
    this.count = 0
  }

  isEmpty() {
    return this.count === 0
  }
}

let linkNode = new LinkNode()
linkNode.push(1)
linkNode.push(2)
linkNode.push(3)
linkNode.push(4)
linkNode.push(5)
// console.log(linkNode)
// console.log(linkNode.size())
// console.log(linkNode.getElementAt(3))
linkNode.insert("一", 2)
console.dir(linkNode,{ depth: null })
// console.log(linkNode.isEmpty())

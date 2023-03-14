class Queue {
    constructor() {
        this.items = {}
        this.count = 0
        this.firstItemKey = 0 // 先进先出,前端item先出
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    shift() {
        if (this.isEmpty()) {
            return undefined
        } else {
            let delItem = this.items[this.firstItemKey]
            delete this.items[this.firstItemKey]
            this.firstItemKey++
            this.count--
            return delItem
        }

    }

    isEmpty() {
        return this.count === 0
    }

    peek() {
        return this.items[this.firstItemKey]
    }

    size() {
        return this.count
    }

    toString() {
        if (this.isEmpty()) {
            return ""
        } else {
            let str = this.items[0]
            for (let i = 1; i < this.count; i++) {
                str = `${str},${this.items[i]}`
            }
            return str
        }
    }

    clear() {
        this.items = {}
        this.count = 0
        this.firstItemKey = 0
    }
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.toString())
console.log(queue.shift())
console.log(queue.peek())
console.log(queue.size())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.isEmpty())

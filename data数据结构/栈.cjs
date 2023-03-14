class Stack {
    constructor() {
        this.items = {}
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.count--
            const delItem = this.items[this.count]
            delete this.items[this.count]
            return delItem
        }
    }

    isEmpty() {
        return this.count === 0
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        } else {
            return this.items[0]
        }
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
                str += `,${this.items[i]}`
            }
            return str
        }
    }

    clear() {
        this.items = {}
        this.count = 0
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
console.log(stack.toString())

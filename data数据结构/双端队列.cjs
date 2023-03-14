class DbQueue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // 三种情况,1.空 2.最低位不在0处 3.最低位在0处
    addFront(element) {
        if (this.isEmpty()) {
            this.items[0] = element
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.lowestCount = 0
            this.items[0] = element
        }
        this.count++
    }
    addEnd(element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront() {
        delete this.items[this.lowestCount]
        this.lowestCount++
    }

    removeEnd() {
        delete this.items[this.count]
        this.count--
    }

    size() {
        return this.count - this.lowestCount
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined
        } else {
            return this.items[this.lowestCount]
        }
    }

    peekEnd() {
        if (this.isEmpty()) {
            return ""
        } else {
            return this.items[this.count - 1]
        }
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    toString() {
        if (this.isEmpty()) {
            return ""
        } else {
            let str = this.items[this.lowestCount]
            for (let i = this.lowestCount + 1; i < this.count; i++) {
                str = `${str},${this.items[i]}`
            }
            return str
        }
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
}

let dbQ = new DbQueue()
dbQ.addFront(1)
dbQ.addEnd("一")
dbQ.addFront(2)
dbQ.addEnd("二")
dbQ.addFront(3)
dbQ.addEnd("三")
dbQ.addFront(4)
dbQ.addEnd("四")
dbQ.addFront(5)
console.log(dbQ)
console.log(dbQ.toString())
console.log(dbQ.isEmpty())
console.log(dbQ.size())
console.log(dbQ.peekEnd())
console.log(dbQ.peekFront())
dbQ.removeEnd()
dbQ.removeFront()
console.log(dbQ.peekFront())
console.log(dbQ.peekEnd())


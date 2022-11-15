console.log('hello world')

let n = 10
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        console.log(i, j)
    }
}

// 这个例子就是求2的多少次方会大于i，然后就会结束循环。 这就是一个典型的 O(logn)
let i = 1
while (i < n) {
    console.log(i)
    i *= 2
}

// vim在中文情况下有闪动

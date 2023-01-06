n = [30, 20, 10]
console.log(n)
n[3] = 40
console.log(n)
n.push(50)
console.log(n)
console.log(n.length)
console.log(n.sort())

/*for (c = 0; c != n.length; c++) {
    console.log(n[c])
}*/

for (pos in  n) {
    console.log(`--> ${n[pos]}`)
}

console.log(n.indexOf(50))
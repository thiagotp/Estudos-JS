function priult(vector) {
    const first = vector.shift()
    const last = vector.pop()
    const result = []
    result.push(first)
    result.push(last)
    return result
}

let vector = [1, 2, 3, "opa"]

console.log(priult(vector))
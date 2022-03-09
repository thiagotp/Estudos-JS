function arrayPar(vector){
    const vec = []
    for(let i=0;i<vector.length;i++){
        if((vector[i] % 2 == 0) && (i % 2 ==0)){
            vec.push(vector[i])
        }
    }
    return vec
}

console.log(arrayPar([2,3,4,7,6,9,8]))
console.log(arrayPar([0,2,3,4,7,6,9,8]))
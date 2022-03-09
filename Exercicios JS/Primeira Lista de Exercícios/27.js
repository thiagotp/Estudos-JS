function comparacao(altura1, altura2, taxa1, taxa2) {
    let alturaNova1 = altura1
    let alturaNova2 = altura2
    let quantAnos = 0
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return "A criança 1 será maior que a criança 2 em 1 ano"
        } else {
            return "A criança 2 será maior que a criança 1 em 1 ano"
        }
    } else {
        if (altura1 > altura2) {
            if (taxa2 > taxa1) {
                while (alturaNova2 < alturaNova1) {
                    alturaNova2 = alturaNova2 + taxa2
                    alturaNova1 = alturaNova1 + taxa1
                    quantAnos++
                }
                return `A criança 2 será maior que a criança 1 depois de em ${quantAnos} anos`
            } else {
                return `A criança 1 sempre será maior que a criança 2`
            }
        } else {
            if (taxa1 > taxa2) {
                while (alturaNova1 < alturaNova2) {
                    alturaNova2 = alturaNova2 + taxa2
                    alturaNova1 = alturaNova1 + taxa1
                    quantAnos++
                }
                return `A criança 1 será maior que a criança 2 depois de em ${quantAnos} anos`
            } else {
                return `A criança 2 sempre será maior que a criança 1`
            }
        }
    }
}

console.log(comparacao(1.80, 1.65, 0.1, 0.2))
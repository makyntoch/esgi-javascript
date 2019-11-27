function type_check_v1(input, type){
    switch(input){
        case null:
            return type === "null"
        case Array:
            return type === "Array"
        default:
            return type === String(typeof input)
    }
}

console.log(type_test_v1(null, "null"))
console.log(type_test_v1(Array, "Array"))
console.log(type_test_v1(1, "number"))
console.log(type_test_v1("eric", "string"))
console.log(type_test_v1(1.05, "float"))




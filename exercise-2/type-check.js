function type_check_v1(input, type){
    // switch(input){
    //     case null:
    //         return type == "null"
    //     case Array:
    //         return type == "array"
    //     default:
    //         return type == typeof input
    // }
    if(Array.isArray(input)) return type === "array";
    if(input === null) return type === "null";
    return type === typeof input;
}

console.log(type_check_v1(null, "null"))
console.log(type_check_v1([1,2,3], "array"))
console.log(type_check_v1(1, "number"))
console.log(type_check_v1("eric", "string"))
console.log(type_check_v1(1.05, "number"))
console.log(type_check_v1(undefined, "undefined"))



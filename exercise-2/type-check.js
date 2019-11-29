function type_check_v1(input, type){
  if(Array.isArray(input)) return type === "array";
  if(input === null) return type === "null";
  return type === typeof input;
}

console.log(type_check_v1(null, "null"))
console.log(type_check_v1([1,2,3], "array"))
console.log(type_check_v1(1, "number"))

function type_check_v2(vari, conf){
  for(key in conf){
    switch(key){
      case 'type':
        if(!type_check_v1(vari, conf[key])) return false;
        break;
      case 'value':

        break;
      case 'enum':
        break;    
    }
  }
  return true;
}
function validString(str){
    return !(typeof str !== 'string' || str.length === 0)
}

function ucfirst(str) {
    if (!validString(str)) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test ucfirst"));


function capitalize(str) {
    if (!validString(str)) return "";
    return str.toLowerCase().split(" ").map(item => ucfirst(item)).join(" ");
}

console.log(capitalize("hello world capitalize"));

function camelCase(str){
    if (!validString(str)) return "";
    return str
      .replace(/[^a-zA-Z0-9 ]/gi, " ")
      .toLowerCase()
      .split(" ")
      .map(item => ucfirst(item))
      .join("");
}
console.log(camelCase("hel?lo_wor/ld caMel case 1"));

function snake_case(str){
    if (!validString(str)) return "";
    return str.replace(/[^a-zA-Z0-9\\_ ]/gi, "").toLowerCase().split(" ").map(item => item).join("_");
}

console.log(snake_case("hel?lo WorL/d sna!!ke ca:se9"));

function leet(str){
    if (!validString(str)) return "";
    return str
    .replace(/[a]/gi, 4)
    .replace(/[e]/gi, 3)
    .replace(/[i]/gi, 1)
    .replace(/[o]/gi, 0)
    .replace(/[u]/gi, '(_)')
    .replace(/[y]/gi, 7)
}

console.log(leet("a e i o u y A E I O U Y"));

function verlan(str){
  if(!validString(str)) return "";
  return str.split(" ").map(item => item.split("").reverse().join("")).join(" ")
}

console.log(verlan("Hello world"));

function yoda(str){
  if(!validString(str)) return "";
  return str.split(" ").reverse().join(" ")
}

console.log(yoda("Hello world"));

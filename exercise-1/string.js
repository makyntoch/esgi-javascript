function validString(str){
    return !(typeof str !== 'string' || str.length === 0)
}

function ucfirst(str) {
    if (!validString(str)) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst('test ucfirst'));


function capitalize(str) {
    if (!validString(str)) return "";
    return str.toLowerCase().split(' ').map(item => ucfirst(item)).join(" ");
}

console.log(capitalize("hello world capitalize"));

function camelCase(str){
    if (!validString(str)) return "";
    return str.replace(/[^a-zA-Z0-9 ]/gi, "").toLowerCase().split(' ').map(item => ucfirst(item)).join("");
}

console.log(camelCase("hel?lo wor/ld caMel case1"));

function snakeCase(str){
    if (!validString(str)) return "";
    return str.replace(/[^a-zA-Z0-9 ]/gi, "").toLowerCase().split(' ').map(item => item).join("_");
}

console.log(snakeCase("hel?lo WorL/d sna!!ke ca:se9"));

function leet(str){
    if (!validString(str)) return "";
    return str.replace(/[a]/gi, 4)
    .replace(/[e]/gi, 3)
    .replace(/[i]/gi, 1)
    .replace(/[o]/gi, 0)
    .replace(/[u]/gi, '(_)')
    .replace(/[y]/gi, 7)
}

console.log(leet("a e i o u y A E I O U Y"));

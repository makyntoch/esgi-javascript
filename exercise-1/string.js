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
    return str.toLowerCase().replace(/[^\w]/gi, "_");
}

console.log(snake_case("hello?WorLd sna!ke 9case"));

function leet(str){
    if (!validString(str)) return "";
    return str
    .replace(/[aeiouy]/gi, function(chr){
      switch(chr){
        case "A":
        case "a":
          return 4;
        case "E":
        case "e":
          return 3;
        case "I":
        case "i":
          return 1;
        case "O":
        case "o":
          return 0;
        case "U":
        case "u":
          return "(_)";
        case "Y":
        case "y":
          return 7;
      }
    })
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

function vig(str, code){
  if(!validString(str) || !validString(code)) return "";
  while(code.length < str.length){
    code += code;
  }
  let codeIndex = 0;
  return str.split("").map(function(chr){
    chr = chr.toLowerCase();
    const chrCode = chr.charCodeAt(0) - "a".charCodeAt(0);
    if(chrCode<0 || chrCode>25) return chr;

    const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

    const encodedCode = (chrCode + codeCode)%26;

    return String.fromCharCode(encodedCode + "a".charCodeAt(0));
  }).join("");
}
console.log(vig("hello", "world"));
let ocode = "{P.}{!0}13>\\0z\\1\\1\\1\\1";

let stack = [];
let blocks = [];

function consume(x) {
  stack.splice(stack.length - 2, 2);
  stack.push(x);
}


for (let i = 0; i < ocode.length; i++) {
  const char = ocode[i];
  if (char == "{") {
    let j = i + 1;
    let block = [];
    while (ocode[j] != "}") {
      block.push(ocode[j]);
      j++;
    }
    blocks.push(block.join(""));
  }
}

ocode = ocode.split("{");
for (let i = 0; i < ocode.length; i++) {
  ocode[i] = ocode[i].split("}")[1];
}
ocode = ocode.join("");

function run(code) {
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    switch (char) {
      case "+":
        consume(parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2]));
        break;
      case "-":
        consume(parseInt(stack[stack.length - 1]) - parseInt(stack[stack.length - 2]));
        break;
      case "/":
        consume(parseInt(stack[stack.length - 1]) / parseInt(stack[stack.length - 2]));
        break;
      case "*":
        consume(parseInt(stack[stack.length - 1]) * parseInt(stack[stack.length - 2]));
        break;
      case ".":
        console.log(stack[stack.length - 1]);
        break;
      case "=":
        if (stack[stack.length - 1] != stack[stack.length - 2]) {
          i += 2;
        }
        break;
      case "<":
        if (parseInt(stack[stack.length - 1]) >= parseInt(stack[stack.length - 2])) {
          i += 2;
        }
        break;
      case ">":
        if (parseInt(stack[stack.length - 1]) <= parseInt(stack[stack.length - 2])) {
          i += 2;
        }
        break;
      case "!":
        stack.splice(code[parseInt(i + 1)], 1);
        i++;
        break;
      default:
        if (/^\d+$/.test(char) && code[i - 1] == "\\") {
          run(blocks[parseInt(char)]);
        } else if (char == "\\") {
          // nothing
        } else {
          stack.push(char);
        }
        break;
    }
  }
}

run(ocode);

console.log(ocode, stack, blocks);
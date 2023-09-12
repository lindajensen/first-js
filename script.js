let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

console.log(add, subtract);

add.addEventListener("click", function () {
    let output = document.querySelector("output");
    let result = Number(output.innerText) + 1;  

    output.innerText = result;
  
});
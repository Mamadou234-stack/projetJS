// Portée globale
var globalVar = "Je suis une variable globale";
let globalLet = "Je suis aussi global, mais avec une portée let";
const globalConst = "Je suis une constante globale";


{
// Portée de bloc
var blockVar = "Je suis une var avec portée de bloc";
let blockLet = "Je suis un let avec portée de bloc";
const blockConst = "Je suis une const avec portée de bloc";
}
// Portée globale
console.log(globalVar); // Sortie : "Je suis une variable globale"
console.log(globalLet); // Sortie : "Je suis aussi global, mais avec let"
console.log(globalConst); // Sortie : "Je suis une constante globale"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
    var functionVar = "Je suis une var à portée de bloc";
    let functionLet = "Je suis un let à portée de bloc";
    const functionConst = "Je suis un const à portée de bloc";
    }
    show();
    
    console.log(functionVar); // Lance une ReferenceError
    console.log(functionLet); // Lance une ReferenceError
    console.log(functionConst); // Lance une ReferenceError
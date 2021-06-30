
exports.generatePassword = function generatePassword(){
    const symbols = ["@#$&+_=%"];
    const alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const numbers = ["1234567890"];
    //
    let selectSymbol =  Math.floor(Math.random() * symbols.length);
    let selectAlphabet1 = Math.floor(Math.random() * alphabet.length);
    let selectAlphabet2 = Math.floor(Math.random() * alphabet.length);
    let selectAlphabet3 = Math.floor(Math.random() * alphabet.length);
    let selectNumbers = Math.floor(Math.random() * numbers.length);
    for(let i=0;i<6;i++){

    }
    return "1234";
}
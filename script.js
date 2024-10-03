const btnSoma = document.getElementById("somar");
btnSoma.addEventListener ("click", () => {
    let numero1 = document.getElementById ("numero1").value;
    let numero2 = document.getElementById ("numero2").value;
    let resultadoso = parseInt(numero1) + parseInt(numero2);
    document.getElementById ("resul").innerHTML = "O resultado é " + resultadoso;
});
const btnSub = document.getElementById("sub");
btnSub.addEventListener ("click", () => {
    let numero1 = document.getElementById ("numero1").value;
    let numero2 = document.getElementById ("numero2").value;
    let resultadosu = parseInt(numero1) - parseInt(numero2);
    document.getElementById ("resul").innerHTML = "O resultado é " + resultadosu;
});
const btnMulti = document.getElementById("multi");
btnMulti.addEventListener ("click", () => {
    let numero1 = document.getElementById ("numero1").value;
    let numero2 = document.getElementById ("numero2").value;
    let resultadomu = parseInt(numero1) * parseInt(numero2);
    document.getElementById ("resul").innerHTML = "O resultado é " + resultadomu;
});
const btnDivi = document.getElementById("divi");
btnDivi.addEventListener ("click", () => {
    let numero1 = document.getElementById ("numero1").value;
    let numero2 = document.getElementById ("numero2").value;
    let resultadodi = parseInt(numero1) / parseInt(numero2);
    document.getElementById ("resul").innerHTML = "O resultado é " + resultadodi;
});
// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseInt(prompt ("digite uma nota:"));
let nota2 = parseInt(prompt ("digite outra nota:"));
let nota3 = parseInt(prompt ("digite outra nota:"));
let nota4 = parseInt(prompt ("digite outra nota:"));

let media = nota1 + nota2 + nota3+ nota4

let mediafinal = media/4

alert("Sua media é" + mediafinal)

if( mediafinal > 6){
    alert ("Você passou!!!")
}

else{
    alert( "Você é fraco lhe falta nota")
}





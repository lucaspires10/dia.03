
function calcula(){
//alert( 'nota do aluno' );
var nome =document.querySelector('#nome_aluno').value;
var nota =document.querySelector('#nota_aluno').value;
console.log(nota);
if (nota <=5){
alert(' O (a) ' + Nome + ' esta reprovado '+ nota);

}
if(nota >5 && nota<7){
   alert('O (a) aluno (a) ' + nome + ' esta de recuperacao '+ nota );
}

 if (nota >=7){
alert('O (a) '  + nome + ' foi aprovado ' + nota);

}

}  
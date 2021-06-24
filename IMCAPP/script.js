let peso;
let altura;

function envia(peso,altura) {
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    let conta = peso/(altura*altura);
    //função JS para reduzir as casas decimais.
    let imc = parseFloat(conta.toFixed(2))

    if(imc<18.5){
        document.getElementById('campoResp').innerHTML = 'seu imc é '+imc+' você esta em situação de <b>Magreza<b> em relação ao seu peso.';
    }
    else if(imc>=18.5&&imc<=24.9){
        document.getElementById('campoResp').innerHTML = 'seu imc é '+imc+' você esta em situação <b>Normal<b> em relação ao seu peso.';
    }
    else if(imc>=25.0&&imc<=29.9){
        document.getElementById('campoResp').innerHTML = 'seu imc é '+imc+' você esta em situação de <b>Sobrepeso<b> em relação ao seu peso.'
    }

    else if(imc>=30.0&&imc<=39.9){
        document.getElementById('campoResp').innerHTML = 'seu imc é '+imc+' você esta em situação de <b>Obesidade<b> em relação ao seu peso.'
    }
    
    else if(imc>40){
        document.getElementById('campoResp').innerHTML = 'seu imc é '+imc+' você esta em situação de <b>Obesidade Grave</b> em relação ao seu peso.'
    }
    else{

        alert('Digite um valor valido')

    }

    console.log(imc);
}
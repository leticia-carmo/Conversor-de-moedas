function cotacaoSetada(){
		alert("Que legal! Você escolheu a opção de cotação no valor de R$5,50!");
		var valorProduto = parseFloat(prompt("Qual é o valor do produto que deseja converter? obs: Utilize . ao invés de vírgula para indicar os centavos."));
		var calculoValor = valorProduto *5.50;
		var valorFinal = calculoValor.toFixed(2);/*a função toFixed fixa valores depois da vírgula/ CALCULADORA*/
		alert("Certo! Fiz os cálculos e constatei que o seu produto está custando um total de R$" + valorFinal + "!");
	}

	function escolherCotacao(){
		var cotacaoMoeda = parseFloat(prompt("OK! Qual é o valor da cotação que deseja utilizar? obs: Utilize . ao invés de vírgula para indicar os centavos."));
		var valorProduto = parseFloat(prompt("Qual é o valor do produto que deseja converter? obs: Utilize . ao invés de vírgula para indicar os centavos."));
		var calculoValor = valorProduto * cotacaoMoeda;
		var valorFinal = calculoValor.toFixed(2);/*a função toFixed fixa valores depois da vírgula/ CALCULADORA*/
		alert("Certo! Fiz os cálculos e constatei que o seu produto está custando um total de R$" + valorFinal + "!");
	}
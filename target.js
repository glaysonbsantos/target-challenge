(function () {
  /*
    1) Observe o trecho de código abaixo:
    int INDICE = 13, SOMA = 0, K = 0;
    enquanto K < INDICE faça {
        K = K + 1;
        SOMA = SOMA + K;
    }
    imprimir(SOMA);

    Ao final do processamento, qual será o valor da variável SOMA?
    RESPOSTA: 91
    */

  var indice = 13;
  var soma = 0;
  var k = 0;

  while (k < indice) {
    k += 1;
    soma += k;
  }

  console.log(soma);

  /*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
    */

  // Podemos utilizar funções com a regra do quadrado perfeito: (5*n*n + 4) ou (5*n*n - 4)
  function isPerfectSquare(num) {
    let result = parseInt(Math.sqrt(num));
    return result * result == num;
  }

  function isFibonacci(num) {
    return isPerfectSquare(5 * num * num + 4) ||
      isPerfectSquare(5 * num * num - 4)
      ? console.log(num + " pertence à sequência Fibonacci.")
      : console.log(num + " não pertence à sequência Fibonacci.");
  }

  isFibonacci(0);
  //isFibonacci(4)
  //isFibonacci(13)
  //isFibonacci(14)

  /*
    3) Descubra a lógica e complete o próximo elemento:

    a) 1, 3, 5, 7, (9)
    b) 2, 4, 8, 16, 32, 64, (128)
    c) 0, 1, 4, 9, 16, 25, 36, (49)
    d) 4, 16, 36, 64, (100)
    e) 1, 1, 2, 3, 5, 8, (13)
    f) 2, 10, 12, 16, 17, 18, 19, (200)
  */

  /*
  4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

  IMPORTANTE:
  a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
  b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
  c) Explique como chegou no resultado.

    RESPOSTA:
    Considerando que o caminhão passe inicialmente 10 minutos parado, graças aos 2 pedágios, temos a seguinte tabela:

    tempo corrido min       km percorrido carro      km percorrido caminhao    soma dos km percorridos
         10                       18,33                           0 	                18,33
         20                       36,66                       13,33                     49,99
         30                       54,99                       26,66                     81,65
         35                       64,15                       33,32	                    97,47
         36                       65,95                       34,65	                   100,60

    Quando os veículos se cruzarem no Tempo Corrido aproximado de 36min, podemos perceber que a distância deles para Riberião preto será praticamente a mesma.

  5) Escreva um programa que inverta os caracteres de um string.

  IMPORTANTE:
  a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
  b) Evite usar funções prontas, como, por exemplo, reverse;

  */

  function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }

    return console.log(newString);
  }

  reverseString('Hello, World!');
  
})();

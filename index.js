const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "vari myVar = 5;",
        "v myVar = 5;",
        "let myVar = 5;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=>",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "object",
        "boolean",
        "array",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction()",
        "function:myFunction()",
        "function myFunction()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método de string retorna o comprimento da string?",
      respostas: [
        "length()",
        "size()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável que não pode ser alterada em JavaScript?",
      respostas: [
        "constant",
        "var",
        "let",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída da expressão '3' + 2 em JavaScript?",
      respostas: [
        "32",
        "5",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses é um loop de repetição em JavaScript?",
      respostas: [
        "for",
        "if",
        "else",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      } 
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }
const data = [
  {
    category: "Futebol",
    questions: [
      {
        question: "Qual país sediou a Copa do Mundo de 2014?",
        options: ["Brazil", "Espanha", "Russia", "Alemanha"],
        answer: "Brazil",
        tip: "Este país é conhecido por sua paixão pelo futebol e tem uma das maiores seleções do mundo.",
      },
      {
        question: "Em que ano a Inglaterra venceu sua primeira e única Copa do Mundo?",
        options: ["1974", "1962", "1982", "1966"],
        answer: "1966",
        tip: "22",
      },
      {
        question: "Qual jogador de futebol é conhecido como 'O Fenômeno'",
        options: ["Adriano", "Cristiano Ronaldo", "Ronaldo Nazário", "Romário"],
        answer: "Ronaldo Nazário",
      },
      {
        question: "Qual clube de futebol tem mais títulos da Liga dos Campeões da UEFA?",
        options: ["Barcelona", "Real Madrid", "Liverpool", "Milan"],
        answer: "Real Madrid",
      },
      {
        question: "Qual jogador argentino é conhecido como 'La Pulga'?",
        options: ["Sergio Agüero", "Paulo Dybala", "Lionel Messi", "Gonzalo Higuaín"],
        answer: "Lionel Messi",
      },
      {
        question: "Qual país ganhou a Copa do Mundo de Futebol Feminino em 2019?",
        options: ["Brazil", "USA", "França", "Alemanha"],
        answer: "França",
      },
      {
        question: "Quem foi o artilheiro da Copa do Mundo de 2018?",
        options: ["Lionel Messi", "Neymar", "Harry Kane", "Mbappé"],
        answer: "Harry Kane",
        tip: "Nunca ganhou título como profissional",
      },
      {
        question: "Qual é o apelido da Seleção Nacional de Futebol da Alemanha?",
        options: ["Les Bleus", "Die Mannschaft", "Azzurri", "Furia Roja"],
        answer: "Die Mannschaft",
        tip: "Este apelido significa 'A Equipe'.",
      },
      {
        question: "Quem é o jogador com mais gols marcados na história da Liga dos Campeões da UEFA?",
        options: ["Cristino Ronaldo", "Lionel Messi", "Karim Benzema", "Raul"],
        answer: "Cristino Ronaldo",
        tip: "SIIII",
      },
      {
        question: "al jogador brasileiro é conhecido como 'O Bruxo'",
        options: ["Kaká", "Ronaldinho Gaúcho", "Romário", "Salah"],
        answer: "Ronaldinho Gaúcho",
        tip: "Este jogador encantou o mundo com suas habilidades e dribles.",
      },
    ],
  },
  {
    category: "Geografia",
    questions: [
      {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["Russia", "China", "USA", "India"],
        answer: "Russia",
        tip: "Este país abrange uma grande parte da Europa e da Ásia.",
      },
      {
        question: "Qual é o ponto mais alto da África?",
        options: ["Monte Elbrus", "Monte Everest", "Kilimanjaro", "Monte Aconcágua"],
        answer: "Kilimanjaro",
      },
      {
        question: "Qual é o rio mais longo do mundo?",
        options: ["Rio Amazonas", "Rio Mississipi", "Rio Yangtze", "Rio Nilo"],
        answer: "Rio Nilo",
      },
      {
        question: "Qual é o menor continente do mundo?",
        options: ["Europa", "América", "Ásia", "Oceania"],
        answer: "Oceania",
      },
      {
        question: "Qual é o país com a maior população do mundo?",
        options: ["China", "Russia", "USA", "Brazil"],
        answer: "China",
        tip: "5",
      },
      {
        question: "Qual é o ponto mais baixo da Terra, em terra firme?",
        options: ["Vale da Morte, Estados Unidos", "Lago Assal, Djibouti", "Mar Morto, Israel/Jordânia", "Deserto de Danakil, Etiópia"],
        answer: "Vale da Morte, Estados Unidos",
        tip: " Este local está localizado na Califórnia e é conhecido por suas temperaturas extremamente altas.",
      },
      {
        question: "Qual é o país com a maior extensão de costa do mundo?",
        options: ["Brazil", "Canadá", "Australia", "Chile"],
        answer: "Canadá",
      },
      {
        question: "Qual é o país mais populoso da Europa?",
        options: ["Russia", "França", "Alemanha", "Reino Unido"],
        answer: "Alemanha",
        tip: "Este país é conhecido por sua história, cultura e economia influentes na Europa.",
      },
      {
        question: "Qual é a capital mais alta do mundo?",
        options: ["Quito, Equador", "La Paz, Bolívia", "Bogotá, Colômbia", "Kathmandu, Nepal"],
        answer: "La Paz, Bolívia",
        tip: "Esta capital está localizada nos Andes, a uma altitude de aproximadamente 3.650 metros.",
      },
      {
        question: "Qual é o menor país do mundo em área territorial?",
        options: ["Vaticano", "Mônaco", "Nauru", "São Marino"],
        answer: "Vaticano",
        tip: "Este país é um enclave dentro da cidade de Roma, na Itália.",
      },
    ],
  },
  {
    category: "História",
    questions: [
      {
        question: "Qual evento histórico marcou o fim da Idade Média na Europa?",
        options: [
          "A Guerra dos Cem Anos",
          "A Queda de Constantinopla",
          "A Peste Negra",
          "A Descoberta da América",
        ],
        answer: "A Queda de Constantinopla",
      },
      {
        question: "Qual foi a primeira dinastia a governar a China?",
        options: ["Han", "Ming", "Shang", "Zhou"],
        answer: "Shang",
      },
      {
        question: "Quem foi o líder francês durante a Revolução Francesa?",
        options: ["Luís XIV", "Napoleão Bonaparte", "Luís XVI", "Robespierre"],
        answer: "Luís XVI",
      },
      {
        question: "Qual foi o resultado da Revolução Russa de 1917?",
        options: ["Abolição da monarquia e instauração do comunismo", "Restauração da monarquia absoluta", "Democracia parlamentar", "Vitória das forças conservadoras"],
        answer: "Abolição da monarquia e instauração do comunismo",
      },
      {
        question:
          "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
        answer: "George Washington",
      },
      {
        question:
          "Qual evento marcou o início da Primeira Guerra Mundial?",
        options: ["O assassinato do arquiduque Francisco Ferdinando", "A invasão da Polônia pela Alemanha", "O bombardeio de Pearl Harbor", "A Revolução Russa"],
        answer: "O assassinato do arquiduque Francisco Ferdinando",
      },
      {
        question:
          "Qual foi o imperador romano que legalizou o cristianismo no Império Romano?",
        options: ["Nero", "Augusto", "Constantino", "Marco Aurélio"],
        answer: "Constantino",
      },
      {
        question:
          "Qual foi o resultado imediato da Revolução Industrial?",
        options: ["Aumento da produção industrial e urbanização", "Declínio da agricultura", "Redução da população urbana", "Crescimento das economias agrárias"],
        answer: "Aumento da produção industrial e urbanização",
      },
      {
        question:
          "Qual país liderou a corrida espacial ao lançar o primeiro satélite artificial, o Sputnik 1?",
        options: ["Estados Unidos", "Rússia (União Soviética na época)", "China", "Alemanha"],
        answer: "Rússia (União Soviética na época)",
      },
      {
        question:
          "Quem foi o líder nazista responsável pelo Holocausto durante a Segunda Guerra Mundial?",
        options: ["Adolf Hitler", "Heinrich Himmler", "Joseph Goebbels", "Hermann Göring"],
        answer: "Adolf Hitler",
      },
    ],
  },
  {
    category: "Todas",
    questions: [
      {
        question:
          "Qual foi o resultado imediato da Revolução Industrial?",
        options: ["Aumento da produção industrial e urbanização", "Declínio da agricultura", "Redução da população urbana", "Crescimento das economias agrárias"],
        answer: "Aumento da produção industrial e urbanização",
      },
      {
        question: "al jogador brasileiro é conhecido como 'O Bruxo'",
        options: ["Kaká", "Ronaldinho Gaúcho", "Romário", "Salah"],
        answer: "Ronaldinho Gaúcho",
        tip: "Este jogador encantou o mundo com suas habilidades e dribles.",
      },
      {
        question: "Qual é o rio mais longo do mundo?",
        options: ["Rio Amazonas", "Rio Mississipi", "Rio Yangtze", "Rio Nilo"],
        answer: "Rio Nilo",
      },
      {
        question: "Qual evento histórico marcou o fim da Idade Média na Europa?",
        options: [
          "A Guerra dos Cem Anos",
          "A Queda de Constantinopla",
          "A Peste Negra",
          "A Descoberta da América",
        ],
        answer: "A Queda de Constantinopla",
      },
      {
        question: "Qual foi a primeira dinastia a governar a China?",
        options: ["Han", "Ming", "Shang", "Zhou"],
        answer: "Shang",
      },
      {
        question: "Qual jogador argentino é conhecido como 'La Pulga'?",
        options: ["Sergio Agüero", "Paulo Dybala", "Lionel Messi", "Gonzalo Higuaín"],
        answer: "Lionel Messi",
      },
      {
        question: "Qual país ganhou a Copa do Mundo de Futebol Feminino em 2019?",
        options: ["Brazil", "USA", "França", "Alemanha"],
        answer: "França",
      },
      {
        question: "Qual é o menor continente do mundo?",
        options: ["Europa", "América", "Ásia", "Oceania"],
        answer: "Oceania",
      },
      {
        question: "Qual é o país com a maior população do mundo?",
        options: ["China", "Russia", "USA", "Brazil"],
        answer: "China",
        tip: "5",
      },
      {
        question: "Qual país sediou a Copa do Mundo de 2014?",
        options: ["Brazil", "Espanha", "Russia", "Alemanha"],
        answer: "Brazil",
        tip: "Este país é conhecido por sua paixão pelo futebol e tem uma das maiores seleções do mundo.",
      },
    ],
  },
];

export default data;
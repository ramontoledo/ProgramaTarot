const tarotDeck = [
    "O Mago", "A Papisa", "A Imperatriz", "O Imperador", "O Hierofante", "Os Enamorados",
    "O Carro", "A Justiça", "O Eremita", "A Roda da Fortuna", "A Força", "O Enforcado",
    "A Morte", "A Temperança", "O Diabo", "A Torre", "A Estrela", "A Lua", "O Sol",
    "O Julgamento", "O Mundo", "Ás de Paus", "Dois de Paus", "Três de Paus", "Quatro de Paus",
    "Cinco de Paus", "Seis de Paus", "Sete de Paus", "Oito de Paus", "Nove de Paus", "Dez de Paus",
    "Pajem de Paus", "Cavaleiro de Paus", "Rainha de Paus", "Rei de Paus", "Ás de Copas", "Dois de Copas",
    "Três de Copas", "Quatro de Copas", "Cinco de Copas", "Seis de Copas", "Sete de Copas", "Oito de Copas",
    "Nove de Copas", "Dez de Copas", "Pajem de Copas", "Cavaleiro de Copas", "Rainha de Copas", "Rei de Copas",
    "Ás de Espadas", "Dois de Espadas", "Três de Espadas", "Quatro de Espadas", "Cinco de Espadas", "Seis de Espadas",
    "Sete de Espadas", "Oito de Espadas", "Nove de Espadas", "Dez de Espadas", "Pajem de Espadas", "Cavaleiro de Espadas",
    "Rainha de Espadas", "Rei de Espadas", "Ás de Ouros", "Dois de Ouros", "Três de Ouros", "Quatro de Ouros",
    "Cinco de Ouros", "Seis de Ouros", "Sete de Ouros", "Oito de Ouros", "Nove de Ouros", "Dez de Ouros",
    "Pajem de Ouros", "Cavaleiro de Ouros", "Rainha de Ouros", "Rei de Ouros"
];


function createInterpretations() {
    const interpretations = {};

    // Arcanos Maiores
    interpretations["O Louco"] = "O Louco representa novos começos, espontaneidade e aventura. É hora de confiar no universo e embarcar em uma jornada sem medo.";
    interpretations["O Mago"] = "O Mago representa habilidade, poder e manifestação. Este é o momento de usar seus talentos para alcançar seus objetivos.";
    interpretations["A Papisa"] = "A Papisa simboliza intuição, sabedoria e conhecimento interior. Confie em sua voz interior e explore o mundo dos mistérios.";
    interpretations["A Imperatriz"] = "A Imperatriz representa fertilidade, abundância e criatividade. É um período de crescimento e prosperidade.";
    interpretations["O Imperador"] = "O Imperador representa autoridade, estrutura e ordem. Ele sugere que você assuma o controle de sua vida e estabeleça uma base sólida para o futuro.";
    interpretations["O Hierofante"] = "O Hierofante representa tradição, espiritualidade e orientação. Ele sugere buscar orientação espiritual ou conselhos de autoridades.";
    interpretations["Os Enamorados"] = "Os Amantes simbolizam escolhas, relacionamentos e harmonia. Este é um momento de fazer escolhas alinhadas com seus valores.";
    interpretations["A Carruagem"] = "A Carruagem representa controle, determinação e vitória. Você está no caminho certo para alcançar seus objetivos.";
    interpretations["A Força"] = "A Força simboliza coragem, compaixão e autocontrole. É hora de enfrentar desafios com confiança e compaixão.";
    interpretations["O Eremita"] = "O Eremita representa introspecção, sabedoria e solidão voluntária. Este é um momento para buscar respostas dentro de si mesmo.";
    interpretations["A Roda da Fortuna"] = "A Roda da Fortuna representa mudanças, ciclos e destino. Este é um período de transformação e movimento.";
    interpretations["A Justiça"] = "A Justiça simboliza equilíbrio, verdade e responsabilidade. Este é um momento para tomar decisões justas e equilibradas.";
    interpretations["O Enforcado"] = "O Enforcado representa sacrifício, rendição e perspectiva. É um momento para mudar a perspectiva e aceitar o que não pode ser mudado.";
    interpretations["A Morte"] = "A Morte simboliza transformação, renovação e fim de ciclos. Este é um momento de deixar ir o que não serve mais.";
    interpretations["A Temperança"] = "A Temperança representa equilíbrio, harmonia e moderação. Este é um momento para encontrar equilíbrio em todas as áreas da vida.";
    interpretations["O Diabo"] = "O Diabo simboliza tentações, vícios e limitações. Este é um aviso para não se deixar aprisionar por desejos materialistas.";
    interpretations["A Torre"] = "A Torre representa mudanças drásticas, revelações e libertação. Este é um momento de transformação súbita e liberação de velhas estruturas.";
    interpretations["A Estrela"] = "A Estrela simboliza esperança, inspiração e espiritualidade. Este é um momento para acreditar em um futuro melhor.";
    interpretations["A Lua"] = "A Lua representa intuição, ilusões e confusão. Este é um momento para confiar em sua intuição, mesmo que as coisas não estejam claras.";
    interpretations["O Sol"] = "O Sol simboliza sucesso, vitalidade e alegria. Este é um período de otimismo e realização.";
    interpretations["O Julgamento"] = "O Julgamento representa renascimento, avaliação e libertação. É um momento para avaliar suas ações e fazer mudanças positivas.";
    interpretations["O Mundo"] = "O Mundo representa conclusão, realização e sucesso. Você atingiu um ciclo completo e está pronto para um novo começo.";
    interpretations["O Carro"] = "Vitória, controle, domínio, ação";

    // Arcanos Menores (Copas)
    interpretations["Ás de Copas"] = "O Ás de Copas indica um novo começo emocional, amor puro e oportunidades emocionantes.";
    interpretations["Dois de Copas"] = "O Dois de Copas simboliza parcerias, conexões emocionais e relacionamentos harmoniosos.";
    interpretations["Três de Copas"] = "O Três de Copas representa celebração, alegria e conexões sociais.";
    interpretations["Quatro de Copas"] = "O Quatro de Copas indica contemplação, introspecção e avaliação das emoções.";
    interpretations["Cinco de Copas"] = "O Cinco de Copas sugere perda, tristeza e decepção. Este é um momento para se concentrar no que ainda está presente.";
    interpretations["Seis de Copas"] = "O Seis de Copas representa nostalgia, memórias do passado e reconexão com a infância.";
    interpretations["Sete de Copas"] = "O Sete de Copas indica escolhas e ilusões. Este é um momento para avaliar suas opções com cuidado.";
    interpretations["Oito de Copas"] = "O Oito de Copas simboliza a busca por um significado mais profundo na vida, o abandono do superficial.";
    interpretations["Nove de Copas"] = "O Nove de Copas, também conhecido como 'O Desejo', representa satisfação emocional e realização dos desejos.";
    interpretations["Dez de Copas"] = "O Dez de Copas sugere alegria, harmonia e realização emocional. É um momento de felicidade plena.";

    // Cartas da corte
    interpretations["Pajem de Copas"] = "O Pajem de Copas representa mensagens emocionais, sensibilidade e uma abordagem artística da vida.";
    interpretations["Cavaleiro de Copas"] = "O Cavaleiro de Copas simboliza romance, idealismo e a busca pela paixão. Ele está em busca do amor verdadeiro.";
    interpretations["Rainha de Copas"] = "A Rainha de Copas é compassiva, intuitiva e representa a empatia e o apoio emocional.";
    interpretations["Rei de Copas"] = "O Rei de Copas é um líder emocionalmente maduro, compassivo e diplomático. Ele oferece orientação e apoio emocional.";


    // Arcanos Menores (Ouros)
    interpretations["Ás de Ouros"] = "O Ás de Ouros representa um novo começo financeiro, prosperidade e segurança material.";
    interpretations["Dois de Ouros"] = "O Dois de Ouros simboliza equilíbrio, tomada de decisão e gestão de recursos.";
    interpretations["Três de Ouros"] = "O Três de Ouros representa colaboração, trabalho em equipe e reconhecimento.";
    interpretations["Quatro de Ouros"] = "O Quatro de Ouros indica segurança financeira, mas alerta para a avareza e apegos materiais.";
    interpretations["Cinco de Ouros"] = "O Cinco de Ouros sugere dificuldades financeiras, mas também a oportunidade de buscar ajuda e apoio.";
    interpretations["Seis de Ouros"] = "O Seis de Ouros simboliza generosidade, caridade e compartilhamento de riqueza.";
    interpretations["Sete de Ouros"] = "O Sete de Ouros indica paciência, avaliação e espera pelo resultado de seus esforços.";
    interpretations["Oito de Ouros"] = "O Oito de Ouros representa dedicação, aprimoramento de habilidades e foco no trabalho.";
    interpretations["Nove de Ouros"] = "O Nove de Ouros simboliza segurança financeira e independência. Este é um momento para desfrutar das recompensas do seu trabalho.";
    interpretations["Dez de Ouros"] = "O Dez de Ouros sugere estabilidade financeira, prosperidade familiar e realização material.";

    // Cartas da corte
    interpretations["Pajem de Ouros"] = "O Pajem de Ouros representa mensagens relacionadas a questões materiais, como dinheiro ou carreira.";
    interpretations["Cavaleiro de Ouros"] = "O Cavaleiro de Ouros é prático, determinado e busca o sucesso material. Ele está em busca de estabilidade financeira.";
    interpretations["Rainha de Ouros"] = "A Rainha de Ouros é prática, generosa e representa a estabilidade financeira e o cuidado com o lar e a família.";
    interpretations["Rei de Ouros"] = "O Rei de Ouros é um líder materialmente bem-sucedido, confiável e prático. Ele oferece orientação baseada na experiência e estabilidade financeira.";


    // Arcanos Menores (Espadas)
    interpretations["Ás de Espadas"] = "O Ás de Espadas indica clareza mental, verdade e vitória intelectual.";
    interpretations["Dois de Espadas"] = "O Dois de Espadas simboliza decisões difíceis, equilíbrio e paz interior.";
    interpretations["Três de Espadas"] = "O Três de Espadas representa dor emocional, separação e cura.";
    interpretations["Quatro de Espadas"] = "O Quatro de Espadas indica descanso, recuperação e contemplação.";
    interpretations["Cinco de Espadas"] = "O Cinco de Espadas sugere conflitos, derrotas e desentendimentos. Este é um momento para escolher suas batalhas com sabedoria.";
    interpretations["Seis de Espadas"] = "O Seis de Espadas simboliza transição, mudança e superação de desafios.";
    interpretations["Sete de Espadas"] = "O Sete de Espadas indica estratégia, astúcia e superação de obstáculos. Este é um momento para ser perspicaz.";
    interpretations["Oito de Espadas"] = "O Oito de Espadas representa confinamento, restrições autoimpostas e a necessidade de buscar a liberdade.";
    interpretations["Nove de Espadas"] = "O Nove de Espadas, também conhecido como 'O Pesadelo', sugere preocupações, ansiedade e pesadelos. Este é um momento para enfrentar seus medos.";
    interpretations["Dez de Espadas"] = "O Dez de Espadas simboliza a conclusão de um ciclo de dificuldades e o início de uma fase de cura e renascimento.";

    // Cartas da corte
    interpretations["Pajem de Espadas"] = "O Pajem de Espadas representa mensagens e informações, sendo muitas vezes associado a notícias inesperadas ou surpresas.";
    interpretations["Cavaleiro de Espadas"] = "O Cavaleiro de Espadas é rápido, astuto e busca a verdade. Ele representa a busca pela justiça e ação decisiva.";
    interpretations["Rainha de Espadas"] = "A Rainha de Espadas é racional, lógica e destemida. Ela representa a busca pela verdade e pela clareza mental.";
    interpretations["Rei de Espadas"] = "O Rei de Espadas é um líder intelectual, lógico e justo. Ele oferece orientação baseada na razão e na verdade.";


    // Arcanos Menores (Paus)
    interpretations["Ás de Paus"] = "O Ás de Paus representa energia, entusiasmo e oportunidades criativas.";
    interpretations["Dois de Paus"] = "O Dois de Paus simboliza planejamento, visão e tomar o controle de seu destino.";
    interpretations["Três de Paus"] = "O Três de Paus representa expansão, crescimento e a realização de metas a longo prazo.";
    interpretations["Quatro de Paus"] = "O Quatro de Paus indica celebração, sucesso e reconhecimento. Este é um momento para comemorar suas conquistas.";
    interpretations["Cinco de Paus"] = "O Cinco de Paus sugere competição, conflito e desafios. Este é um momento para encontrar soluções através da colaboração.";
    interpretations["Seis de Paus"] = "O Seis de Paus simboliza vitória, reconhecimento público e sucesso. Este é um momento de ser reconhecido por seus esforços.";
    interpretations["Sete de Paus"] = "O Sete de Paus indica desafios e resistência. Este é um momento para defender suas crenças e superar obstáculos.";
    interpretations["Oito de Paus"] = "O Oito de Paus representa movimento rápido, mudança e progresso. Este é um momento de ação e avanço rápido.";
    interpretations["Nove de Paus"] = "O Nove de Paus sugere resistência, perseverança e superação de desafios. Este é um momento para continuar mesmo diante da adversidade.";
    interpretations["Dez de Paus"] = "O Dez de Paus indica fardo, sobrecarga e responsabilidades. Este é um momento para avaliar suas obrigações e delegar, se necessário.";

    // Cartas da corte
    interpretations["Pajem de Paus"] = "O Pajem de Paus representa mensagens entusiásticas, criatividade e aventura.";
    interpretations["Cavaleiro de Paus"] = "O Cavaleiro de Paus é aventureiro, corajoso e busca novas experiências. Ele representa a busca pela paixão e pelo entusiasmo.";
    interpretations["Rainha de Paus"] = "A Rainha de Paus é carismática, criativa e representa a liderança inspiradora. Ela encoraja outros a seguirem sua paixão.";
    interpretations["Rei de Paus"] = "O Rei de Paus é um líder carismático, criativo e inspirador. Ele oferece orientação baseada na paixão e no entusiasmo.";


    return interpretations;
}

// Cria o objeto de interpretações usando a função de fábrica
const interpretations = createInterpretations();

// Array para armazenar as cartas já tiradas
let drawnCards = [];

// Função para tirar uma carta
function drawCard() {
    const cardContainer = $("#tarot-cards");

    // Verifica se ainda há cartas para serem tiradas
    if (drawnCards.length < tarotDeck.length) {
        const remainingCards = tarotDeck.filter(card => !drawnCards.includes(card));
        const randomIndex = Math.floor(Math.random() * remainingCards.length);
        const selectedCard = remainingCards[randomIndex];

        // Adiciona a carta ao contêiner
        addCardToContainer(selectedCard);

        // Adiciona a carta à lista de cartas tiradas
        drawnCards.push(selectedCard);
    } else {
        // Avisa quando todas as cartas foram tiradas
        alert("Todas as cartas foram tiradas. Reinicie o jogo.");
    }
}

// Função para adicionar uma carta ao contêiner
function addCardToContainer(selectedCard) {
    const cardContainer = $("#tarot-cards");

    // Cria um elemento de div para a carta
    const card = $("<div>").addClass("card");

    // Cria um elemento de imagem para a carta
    const cardImage = $("<img>").attr({
        src: `images/${selectedCard}.jpg`,
        alt: selectedCard
    });

    // Adiciona a interpretação ao clicar na carta
    cardImage.on("click", () => {
        showInterpretation(selectedCard);
    });

    // Adiciona a imagem à div
    card.append(cardImage);

    // Cria um elemento de div para o nome da carta
    const cardName = $("<div>").text(selectedCard);

    // Adiciona o nome da carta à div
    card.append(cardName);

    // Adiciona a div da carta ao contêiner principal
    cardContainer.append(card);
}
// Função para embaralhar as cartas
function shuffleCards() {
    const cardContainer = $("#tarot-cards");

    // Verifica se há cartas sorteadas para embaralhar
    if (drawnCards.length > 0) {
        // Adiciona a classe de animação de embaralhamento
        cardContainer.addClass("shuffle-animation");

        // Remove a classe de animação após meio segundo
        setTimeout(() => {
            cardContainer.empty(); // Limpa o conteúdo do contêiner principal

            // Adiciona novas cartas aleatórias na mesma quantidade
            for (let i = 0; i < drawnCards.length; i++) {
                const remainingCards = tarotDeck.filter(card => !drawnCards.includes(card));

                // Verifica se ainda há cartas para serem sorteadas
                if (remainingCards.length > 0) {
                    const randomIndex = Math.floor(Math.random() * remainingCards.length);
                    const selectedCard = remainingCards[randomIndex];

                    // Adiciona a carta ao contêiner
                    addCardToContainer(selectedCard);

                    // Adiciona a carta à lista de cartas sorteadas
                    drawnCards[i] = selectedCard;
                }
            }

            // Remove a classe de animação de embaralhamento
            cardContainer.removeClass("shuffle-animation");
        }, 500);
    } else {
        // Avisa que não há cartas sorteadas
        alert("Não há cartas sorteadas para embaralhar.");
    }
}

// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para reiniciar o jogo
function resetGame() {
    const cardContainer = $("#tarot-cards");

    // Limpa o conteúdo do contêiner principal
    cardContainer.empty();

    // Reseta a lista de cartas tiradas
    drawnCards = [];
}

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    $("body").toggleClass("dark-mode");
}

// Função para abrir a interpretação em uma div lateral
function showInterpretation(card) {
    const interpretationText = interpretations[card];
    const interpretationDiv = $("#interpretation-text");
    interpretationDiv.html(interpretationText);

    const modal = $("#interpretation-modal");
    modal.width("300px"); // Ajuste a largura conforme necessário
    modal.addClass("open");
}

// Função para fechar a div de interpretação
function closeInterpretation() {
    const modal = $("#interpretation-modal");
    modal.removeClass("open");
}

// Variável para armazenar a quantidade original de cartas no tarotDeck
const originalCardCount = tarotDeck.length;


// Função para adicionar uma carta ao contêiner
function addCardToContainer(selectedCard) {
    const cardContainer = $("#tarot-cards");

    // Cria um elemento de div para a carta
    const card = $("<div>").addClass("card");

    // Cria um elemento de imagem para a carta
    const cardImage = $("<img>").attr({
        src: `images/${selectedCard}.jpg`,
        alt: selectedCard
    });

    // Adiciona a interpretação ao clicar na carta
    cardImage.on("click", () => {
        showInterpretation(selectedCard);
    });

    // Adiciona a imagem à div
    card.append(cardImage);

    // Cria um elemento de div para o nome da carta
    const cardName = $("<div>").text(selectedCard);

    // Adiciona o nome da carta à div
    card.append(cardName);

    // Adiciona a div da carta ao contêiner principal
    cardContainer.append(card);
}

// Função para reiniciar o jogo
function resetGame() {
    const cardContainer = document.getElementById("tarot-cards");

    // Limpa o conteúdo do contêiner principal
    cardContainer.innerHTML = "";

    // Reseta a lista de cartas tiradas
    drawnCards = [];
}

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Função para abrir a interpretação em um modal Bootstrap
function showInterpretation(card) {
    const interpretationText = interpretations[card];
    const interpretationDiv = document.getElementById("interpretation-text");
    interpretationDiv.innerHTML = interpretationText;

    $('#interpretation-modal').modal('show');
}
function closeInterpretation() {
    $('#interpretation-modal').modal('hide');
}
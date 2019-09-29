function nextJoke (){
    var joke = new Array ();
    joke[0] = "O que são dois pontos pretos bem pequenos em um microscópio? - R: Uma Blacktéria e um Pretozoário.";
    joke[1] = "O que é um pontinho vermelho no meio do oceano? - R: Um REDemoinho.";
    joke[2] = "O que é um pontinho preto na árvore usando um chapéu, uma mascara, uma espada e uma capa? - R: Um beZorro.";
    joke[3] = "O que é um pontinho preto no avião? - R: Aeromosca. ";
    joke[4] = "O que é um pontinho amarelo na piscina? - R: César Cyellow";
    joke[5] = "O que é um ponto vermelhinho em cima da torre do castelo? - R: Uma pimenta do reino.";
    joke[6] = "O que é um pontinho colorido no cachorro? - R: Uma pulga pulando carnaval.";
    joke[7] = "O que é um monte de pontinhos coloridos na praia? - R: Um arrastão de jujubas. ";
    joke[8] = "O que é um pontinho branco no meio da grama? - R: Uma formiga no reveillon.";
    joke[9] = "O que é um pontinho amarelo em cima de uma moto? - R: Ruffles, a batata da Honda.";
    joke[10] = "Um pontinho amarelo no meio do ringue? - R: É o Jean Claude “Fandangos”.";
    var i = Math.floor(11*Math.random())
    document.getElementById("nextJ").innerHTML = (joke[i]);
    }
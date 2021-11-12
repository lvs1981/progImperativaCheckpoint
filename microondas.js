//Pipoca (1) ---------Macarrão (2) ----------Carne (3) ----------Feijão (4) -------Brigadeiro (5)
function microondas(prato,tempo){
    switch(prato){
        case prato:
            if (tempo < 10 && prato == 1 || tempo < 8 && prato == 2 || tempo < 15 && prato == 3 || 
                tempo < 12 && prato == 4 ||tempo < 8 && prato == 5){
                return "Prato pronto, bom apetite!!! ---Tempo insuficiente---"
            }else if(tempo >= 10 && tempo <= 20 && prato == 1 || tempo >= 8 && tempo <= 16 && prato == 2 || 
                    tempo >= 15 && tempo <= 30 && prato == 3 || tempo >= 12 && tempo <= 24 && prato == 4 ||
                    tempo >= 8 && tempo <= 16 && prato == 5){
                return "Prato pronto, bom apetite!!!";
            }else if(tempo > 20 && tempo < 30 && prato == 1 || tempo > 16 && tempo < 24 && prato == 2 || 
                tempo > 30 && tempo < 45 && prato == 3 || tempo > 24 && tempo < 36 && prato == 4 ||
                tempo >= 16 && tempo <= 24 && prato == 5){
                return "Prato pronto, bom apetite!!! ---Sua refeição queimou---";
            }else if(tempo >= 30 && prato == 1 || tempo >= 24 && prato == 2 || tempo >= 45 && prato == 3||
                tempo >= 36 && prato == 4|| tempo >= 24 && prato == 5){
                return "Prato pronto, bom apetite!!! --*KABUMM*--";
                }
        default:
            return "Prato inexistente";
    }
}  
console.log(microondas(1,1));

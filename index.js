window.onload = function(){ // Espera o carregamento dá página acontecer para executar a função anônima

    var tens = 00; // Cria a váriavel tens e atribui a ela o valor 00
    var seconds = 00; // Cria a váriavel seconds e atribui a ela o valor 00
    var minutes = 00; // Cria a váriavel minutes e atribui a ela o valor 00
    var hour = 00; // Cria a váriavel hour e atribui a ela o valor 00
    var interval; // Cria uma váriavel com o nome interval
    var appensSeconds = document.querySelector("#seconds"); // Armazena a tag com o id seconds
    var appensTens = document.querySelector("#tens"); // Armazena a tag com o id tens
    var appensMinutes = document.querySelector("#minutes"); // Armazena a tag com o id minutes
    var appensHour = document.querySelector("#hour"); // Armazena a tag com o id hour
    var buttonStart = document.querySelector("#btn-start"); // Armazena a tag com o id btn-start
    var buttonStop = document.querySelector("#btn-stop"); // Armazena a tag com o id btn-stop
    var buttonReset = document.querySelector("#btn-reset"); // Armazena a tag com o id btn-reset

    buttonStart.onclick = function(){ //Pega a tag armazenada na váriavel buttonStart e declara que toda a vez que um clique for detectado, será executada a função anônima

        clearInterval(interval); // Limpar o intervalo armazenado na váriavel interval
        interval = setInterval(startTime, 10); // Usa a função padrão setInterval do java script, que recebe como parâmetros outra função criada por nós e a quantidade( em milesegundos ) de atualização, a qual sera usada para re-executar a função startTime

    }
    buttonStop.onclick = function(){ //Pega a tag armazenada na váriavel buttonStop e declara que toda a vez que um clique for detectado, será executada a função anônima

        clearInterval(interval); // Limpa a váriavel interval

    }
    buttonReset.onclick = function(){ //Pega a tag armazenada na váriavel buttonReset e declara que toda a vez que um clique for detectado, será executada a função anônima
        clearInterval(interval); // Limpa a váriavel interval
        tens = '00'; // Atribui a string 00 a váriavel tens
        seconds = '00'; // Atribui a string 00 a váriavel seconds
        minutes = '00'; // Atribui a string 00 a váriavel minutes
        hour = '00'; // Atribui a string 00 a váriavel hour

        appensSeconds.innerHTML = seconds; // Pega a tag armazenada em appensSeconds e injeta nela a váriavel seconds
        appensTens.innerHTML = tens; // Pega a tag armazenada em appensTens e injeta nela a váriavel tens
        appensMinutes.innerHTML = minutes; // Pega a tag armazenada em appensMinutes e injeta nela a váriavel minutes
        appensHour.innerHTML = hour; // Pega a tag armazenada em appensHour e injeta nela a váriavel hour


    }

    function startTime(){ //Cria a função startTime que espera ser chamada

        tens++; // adiciona 1 a váriavel tens

        if(tens <= 9){ // se tens for menor que 9
            appensTens.innerHTML = "0" + tens; // injete a string 0 concatenada com a váriavel tens
        }
        if(tens > 9){ // se tens for maior que 9
            appensTens.innerHTML =  tens; // injete no HTML tens
        }
        if(tens > 99){ // se tens for maior que 99
            seconds++; // some 1 a váriavel seconds
            appensSeconds.innerHTML = "0" + seconds; // injete no HTML a string 0 concatenada com a váriavel seconds
            tens = 0; // a váriavel tens recebe o valor 0
            appensTens.innerHTML = "0" + tens; // injete no HTML a string 0 concatenada com a váriavel tens
        }
        if(seconds > 9){// se seconds for maior que 9
            appensSeconds.innerHTML = seconds; // injete no HTML seconds
        }
        if(seconds > 60){ // se seconds for maior que 60
            minutes++; //some 1 a váriavel minutes
            appensMinutes.innerHTML = "0" + minutes; // injete no HTML a string 0 concatenada com a váriavel minutes
            seconds = 0; // a váriavel seconds recebe o valor 0
            appensSeconds.innerHTML = "0" + seconds; // injete no HTML a string 0 concatenada com a váriavel seconds
            tens = 0; // a váriavel tens recebe o valor 0
            appensTens.innerHTML = "0" + tens; // injete no HTML a string 0 concatenada com a váriavel tens
        }
        if(minutes > 9){ // se minutes for maior que 9
            appensMinutes.innerHTML = minutes;// injete no HTML a váriavel minutes
        }
        if(minutes > 60){
            hour++; //some 1 a váriavel hour
            appensHour.innerHTML = "0" + hour; // injete no HTML a string 0 concatenada com a váriavel hour
            seconds = 0; // a váriavel seconds recebe o valor 0
            appensSeconds.innerHTML = "0" + seconds; // injete no HTML a string 0 concatenada com a váriavel seconds
            tens = 0; // a váriavel tens recebe o valor 0
            appensTens.innerHTML = "0" + tens; // injete no HTML a string 0 concatenada com a váriavel tens
            minutes = 0; // a váriavel minutes recebe 0
            appensMinutes.innerHTML = "0" + minutes; // injete no HTML a string 0 concatenada com a váriavel minutes
        }
        if(hour > 9){ // se hour for maior que 9
            appensHour.innerHTML = hour; // injete no HTML a váriavel hour
        }

    }


}
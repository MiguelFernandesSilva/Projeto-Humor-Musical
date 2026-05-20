function analize(){
    let sleep = Number(document.getElementById('sleepTime').value);
    let energy = Number(document.getElementById('energy').value);
    let humorMedia = (sleep + energy) / 2;

    // Elementos editados
    const title = document.getElementById('titleResult');
    const text = document.getElementById('textResult');
    const image = document.getElementById('imageResult');

    // Alert
    if (sleep > 10 || sleep < 1 || energy > 10 || energy < 1){
        alert("Erro! Os números devem ter seu valor entre 1 e 10!");
        return;
    }

    // Avaliador do Humor
    if (humorMedia >= 8){
        title.innerText = "Música Agitada";
        text.innerText = "Experimente ouvir músicas agitadas, como eletrônica ou metal.";
        image.src = '/assets/bruno_mars.jpg';
        image.style.boxShadow = '5px 5px #171725';
        image.style.border = '1px solid #000';
    } else if (humorMedia >= 5){
        title.innerText = "Música Feliz";
        text.innerText = "Músicas animadas como pop e indie combinam com você agora.";
        image.src = '/assets/michael_jackson.jpg';
        image.style.boxShadow = '5px 5px #171725';
        image.style.border = '1px solid #000';
    } else {
        title.innerText = "Música Calma";
        text.innerText = "Músicas calmas como lo-fi e jazz podem te acalmar.";
        image.src = '/assets/lofigirl.jpg';
        image.style.boxShadow = '5px 5px #171725';
        image.style.border = '1px solid #000';
    }
};
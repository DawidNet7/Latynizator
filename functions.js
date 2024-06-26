function transliterate() {
    const inputText = document.getElementById('inputText').value;
    const method = document.getElementById('transliterationMethod').value;
    let outputText;
    switch (method) {
        case 'latynizator1':
            outputText = transliterateRussianToLatin1(inputText);
            break;
        case 'latynizator2':
            outputText = transliterateRussianToLatin2(inputText);
            break;
        case 'latynizator3':
            outputText = transliterateRussianToLatin3(inputText);
            break;
        case 'latynizator101':
            outputText = transliterateRussianToLatin101(inputText);
            break;
        case 'latynizator102':
            outputText = transliterateRussianToLatin102(inputText);
            break;    
        case 'latynizator103':
            outputText = transliterateRussianToLatin103(inputText);
            break;      
        case 'latynizator104':
            outputText = transliterateRussianToLatin104(inputText);
            break;       
        // NOWE SPOSOBY
    }
    let outputTextElement = document.getElementById('outputText');
    let defaultTextElement = document.getElementById('defaultText');
    if (outputText === '') {
        outputTextElement.style.display = 'none';
        defaultTextElement.style.display = 'block';
    } else {
        outputTextElement.innerText = outputText;
        outputTextElement.style.display = 'block';
        defaultTextElement.style.display = 'none';
    }

    detectDevice();
}

// JavaScript do wykrywania urządzenia
function detectDevice() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) {
        console.log("Uruchomiono na urządzeniu mobilnym.");
    } else if (/tablet/i.test(ua)) {
        console.log("Uruchomiono na tablecie.");
    } else {
        console.log("Uruchomiono na komputerze stacjonarnym.");
    }
}

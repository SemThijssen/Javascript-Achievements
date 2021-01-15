"use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let ind1 = randomizer(onderwerp.length);
        let ind2 = randomizer(werkwoord.length);
        let ind3 = randomizer(restwoord.length);
        let woord1 = onderwerp[ind1];
        let woord2 = werkwoord[ind2];
        let woord3 = restwoord[ind3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["father", "luke", "Obi-wan"];
    const werkwoord = ["plays", "wants", "has"];
    const restwoord = ["football", "a cookie", " a lemonade glass"];
        
    let plaatjes = [ "https://www.independent.ie/regionals/kerryman/news/b94fb/34250758.ece/AUTOCROP/w300/2015-12-02_ker_15039481_I1.JPG "]
    
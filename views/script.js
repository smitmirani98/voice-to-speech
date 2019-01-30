
var text = document.querySelector('demo');
var SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  var finalTranscript = '';
  var recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = false;



  function myFunction() {
    recognition.start();
  }

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }


    document.getElementById('demo').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
    text=finalTranscript;

    if(text.includes('mark')&&text.includes('semester')&&text.includes('5')){

    }
    if(text.includes('hello')){
      document.getElementById("demo1").innerHTML = "hoho";
    }
  }
  recognition.onspeechend = function() {
      recognition.stop();

  };
  module.exports.text;

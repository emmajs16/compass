
sessionStorage("language", "en");
function selectLanguage(clicked_id) {
    console.log("language!")
    sessionStorage.setItem("language", clicked_id)
    console.log(sessionStorage.getItem("language"))
}

var englishText = [];
var translatedText = [];
function translateText(){
    englishText = [];
    var all = document.getElementsByClassName("textToTranslate")
    for (var i = 0, max = all.length; i < max; i++) {
        englishText.push(all[i].innerHTML) 
    }
    console.log(englishText)
    translate()
}
function translate() {
    var translation ;
    // the current language selected
    var language = sessionStorage.getItem("language")

    console.log(language)
    var translateApiKey = "trnsl.1.1.20181013T150223Z.7f45f43c8790d477.ed5d567727ed3b5eda3ad57ab47cb8c1f843d927"
    // go through all elements and check if the class is equal to text
    for (var i = 0, max = englishText.length; i < max; i++) {
        var textToTranslate = englishText[i]
        var translateEndpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateApiKey}&text=${textToTranslate}&lang=${language}`
        setTimeout(function() {fetch(translateEndpoint)
        .then(function(data) {
            return data.json()
            })

        .then(function(json) {
            // all[i].innerHTML = json.text
            
            translation = json.text.toString()
            console.log(translation)
            })
            translatedText.push(translation)
        }, 1000);
    }
    
    setTimeout(function(){console.log(translatedText)},10000)
    
}


function displayText(){
    var all = document.getElementsByClassName("textToTranslate");
    for (var i = 0, max = all.length; i < max; i++){
        var currentElement= all[i];
        var currentText = currentElement.innerHTML
        currentElement.innerHTML = allText[i];
        console.log(currentElement)
        console.log("New Text")
        console.log(currentText)
    }

}

// function translate() {
//     var newText;
//     var currentElement = all[i];
//     var currentText = currentElement.innerHTML
//     // get the class name of each element
//     var className = currentElement.className
//     // if the class name of current element is equal to textToTranslate
//     // get the innerHTML of the current element and store it in textToTranslate
//     var textToTranslate = currentText
//     // console.log(textToTranslate)
//     // do some api stuff
//     var translateEndpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateApiKey}&text=${textToTranslate}&lang=${language}`
//     if (className == "textToTranslate") {
//         console.log(currentText)
//         fetch(translateEndpoint)
//             .then(function(data) {
//                 return data.json()
//             })

//             .then(function(json) {
//                 newText = json.text.toString()
//                 console.log(newText)
//             })
//     }
// }

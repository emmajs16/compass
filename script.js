
sessionStorage("language", "en");
function selectLanguage(clicked_id) {
    console.log("language!")
    sessionStorage.setItem("language", clicked_id)
    console.log(sessionStorage.getItem("language"))
}

var allText = []
function translateText() {
    allText = []
    var translation ;
    // the current language selected
    var language = sessionStorage.getItem("language")

    console.log(language)
    var translateApiKey = "trnsl.1.1.20181013T150223Z.7f45f43c8790d477.ed5d567727ed3b5eda3ad57ab47cb8c1f843d927"
    // go through all elements and check if the class is equal to text
    var all = document.getElementsByClassName("textToTranslate");
    for (var i = 0, max = all.length; i < max; i++) {
        //   setTimeout(translate, 2000);
        console.log(all[i].innerHTML)
        var textToTranslate = all[i].innerHTML
        var translateEndpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateApiKey}&text=${textToTranslate}&lang=${language}`
        fetch(translateEndpoint)
        .then(function(data) {
            return data.json()
            })

        .then(function(json) {
            // all[i].innerHTML = json.text
            setTimeout(function() {
            translation = json.text.toString()
            console.log(translation)
            })
            allText.push(translation)}, 2000);
            console.log(all[i].innerHTML)
    }
    setTimeout(function(){console.log(allText)},4000)
    setTimeout(displayText,5500)
    
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

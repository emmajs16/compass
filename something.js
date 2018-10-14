function translateText() {
    // the current language selected
    // var language = sessionStorage.getItem("language")
    var language = "es"
    console.log(language)
    var translateApiKey = "trnsl.1.1.20181013T150223Z.7f45f43c8790d477.ed5d567727ed3b5eda3ad57ab47cb8c1f843d927"
    // go through all elements and check if the class is equal to text
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) 
    
        var newText;
        var currentElement;
        currentElement = all[i];
        var currentText = currentElement.innerHTML
        // get the class name of each element
        var className = currentElement.className
        // if the class name of current element is equal to textToTranslate
            // get the innerHTML of the current element and store it in textToTranslate
            var textToTranslate = currentText
            // console.log(textToTranslate)
            // do some api stuff
            var translateEndpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateApiKey}&text=${textToTranslate}&lang=${language}`
            if (className == "textToTranslate") 
        {
            console.log(currentText)
                fetch(translateEndpoint)
                .then(function(data) {
                    return data.json()
                })

                .then(function(json) {
                    newText = json.text.toString()
                    currentText = newText
                })
        }
    }
}
const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputArea = document.querySelector("#outputArea");
function constructUrl(text) {
    return "https://api.funtranslations.com/translate/minion.json?text=" + text;
}
function doFetch(text) {
    fetch(constructUrl(text))
        .then(response => response.json())
        .then(json => outputArea.innerText = json.contents.translated)
        .catch(errorHandler);
}
function errorHandler(error) {
    console.log("something is wrong with fetching url", error);
    alert("something wrong with the server try again after some time")
}
function clickEventHandler() {
    doFetch(txtInput.value);
}
btnTranslate.addEventListener("click", clickEventHandler);
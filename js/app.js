var btnTranslate=document.querySelector("#btn-translate");
var textareaInput=document.querySelector("#textarea-input");
function clickEventHandler()
{
    console.log("Listening..")
    console.log("input",textareaInput.value);
}
btnTranslate.addEventListener("click",clickEventHandler)
var btnTranslate=document.querySelector("#btn-translate");
var textareaInput=document.querySelector("#textarea-input");
var outputArea=document.querySelector("#output-area");


function clickEventHandler()
{
    outputArea.innerText="vdghvnsbvbnfbv"+textareaInput.value;
}
btnTranslate.addEventListener("click",clickEventHandler)
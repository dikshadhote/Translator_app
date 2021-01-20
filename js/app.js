//button click
var btnTranslate=document.querySelector("#btn-translate");
//take input from text area
var textareaInput=document.querySelector("#textarea-input");
//show op
var outputArea=document.querySelector("#output-area");


function clickEventHandler()
{
   outputArea.innerText="gdhf"+textareaInput.value;
}
btnTranslate.addEventListener("click",clickEventHandler)
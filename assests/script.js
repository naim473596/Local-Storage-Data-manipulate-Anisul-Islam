let selectFontSize = document.getElementById("selectFontSize");
let selectBgColor = document.getElementById("selectBgColor");
let resetButton = document.getElementById("resetButton");
let mainElement = document.querySelector("main");


//load localStorage value
const initialSetup = () => {
const bgColor = localStorage.getItem("bgColor");
const fontSize = localStorage.getItem("fontSize");

if(selectBgColor && selectFontSize){
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}
if(!selectBgColor && !selectFontSize){
    selectFontSize.value = "16px";
    selectBgColor.value = "aqua";
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}
}
initialSetup();



// changeFontsize
// const changeFontSize = (event)=>{
//     console.log(event.target.value)
// }

// add event listeners
selectFontSize.addEventListener("change", (event)=>{
    const SelectedFontSize = event.target.value;
    mainElement.style.fontSize =SelectedFontSize ;
    localStorage.setItem("fontSize", SelectedFontSize)
}) ;

selectBgColor.addEventListener("change", (event)=>{
    const SelectedBgColor = event.target.value;
    mainElement.style.background = SelectedBgColor;
    localStorage.setItem("bgColor",SelectedBgColor)
}) ;
resetButton.addEventListener("click", ()=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
}) ;
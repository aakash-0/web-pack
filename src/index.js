
import "./index.css";
import img from "./image.png";
const root = document.getElementById("root");
const logo = document.createElement('img');
logo.setAttribute("src",img);


const inputDiv = document.createElement("div");
const outpuDiv = document.createElement("div");

inputDiv.setAttribute("class","inputD");
outpuDiv.setAttribute("class","outD");

const inputWrapper=document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

inputWrapper.setAttribute("class","wrap")
input.setAttribute("class","input");
input.setAttribute("placeholder","inter your task");

button.setAttribute("type","submit");
button.setAttribute("class","btn");
button.innerText="Enter";

const mainOut = document.createElement("ul");
mainOut.setAttribute("id","mainOut");


button.addEventListener("click",()=>{
    var value = input.value;
    input.value="";
    var data=document.createElement("li");
    data.innerText = `${value}`
    mainOut.append(data);
})

inputWrapper.append(input);
inputWrapper.append(button);

inputDiv.append(inputWrapper);



// data.innerText="hello 1";
// mainOut.append(data);

// mainOut.append(data);

outpuDiv.append(mainOut);



root.append(logo);
root.append(inputDiv);
root.append(outpuDiv);




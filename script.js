const chat=document.getElementById("chat");

const input=document.getElementById("input");

document.getElementById("send").onclick=send;

input.addEventListener("keydown",e=>{

if(e.key==="Enter") send();

});

function add(text,type){

const div=document.createElement("div");

div.className="message "+type;

div.innerHTML=text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

}

function ai(text){

text=text.toLowerCase();

for(let key in brain){

if(text.includes(key)){

let list=brain[key];

return list[Math.floor(Math.random()*list.length)];

}

}

return "I don't understand yet.";

}

function send(){

let text=input.value;

if(text==="") return;

add(text,"user");

remember(text);

let answer=ai(text);

add(answer,"ai");

input.value="";

}

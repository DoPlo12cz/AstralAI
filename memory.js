let memory=[];

function remember(text){

memory.push(text);

if(memory.length>100){

memory.shift();

}

}

function recalled(word){

for(let m of memory){

if(m.includes(word)){

return true;

}

}

return false;

}

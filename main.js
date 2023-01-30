//let title=document.getElementById('main-header');
//title.style.border ="red 3px solid";
//title.style.borderRadius ="30px";
//let additems=document.all[14];
//additems.style.color = "green";
//additems.style.fontWeight  ="bold";
let items = document.getElementsByClassName('list-group-item');
console.log(items);

items[1].style.backgroundColor = "lightpink";

//Will give an error
//items.style.backgroundColor = "red";

for(let i=0;i<items.length;i++)
{
    items[i].style.backgroundColor = "lightyellow";
};
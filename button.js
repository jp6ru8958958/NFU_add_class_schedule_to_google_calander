var content = document.getElementById("div_cge");
var bt = document.getElementById("bt_print").cloneNode(true);
bt.innerHTML = "<span class=\"ui-button-text\">添加到行事曆</span>";
bt.id = "bt_addToCalander";
bt.onclick = function(){
    AddToCalander();
};
content.insertBefore(bt, content.children[1]);
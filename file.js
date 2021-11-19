
var btn = document.getElementById('btn');

var lista = document.createElement('ul');
var listaEl = document.getElementById('lista');
listaEl.appendChild(lista);

function aggiungiToDo(){
    var item = document.getElementById('item').value;
    var data = document.getElementById('data').value;
    var itemList = document.createElement('li');
    var desc = document.createTextNode(item + ' ' + data);

    itemList.appendChild(desc);

    var btnModify = document.createElement('button');
    var btnDelete = document.createElement('button');
    btnModify.innerHTML = 'Modifica';
    btnDelete.innerHTML = 'Elimina';

    itemList.appendChild(btnModify);
    itemList.appendChild(btnDelete);

    btnModify.addEventListener('click', modifyToDo, false);
    btnDelete.addEventListener('click', deleteToDo, false);

    lista.appendChild(itemList);

    function modifyToDo(){
        document.getElementById("item").value = item;
        document.getElementById("data").value = data;

        lista.removeChild(itemList);
    }
    
    function deleteToDo(){
        lista.removeChild(itemList);
    }
}

btn.addEventListener('click', aggiungiToDo, false);
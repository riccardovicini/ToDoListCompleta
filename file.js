
var btn = document.getElementById('btn');

var lista = document.createElement('ul');
var listaEl = document.getElementById('lista');
listaEl.appendChild(lista);

var toDos = [];

function aggiungiToDo(){
    var item = document.getElementById('item').value;
    var data = document.getElementById('data').value;

    if (item != '' && data != '') {

        var itemList = document.createElement('li');

        var descToDo = document.createTextNode(item);
        var dataToDo = document.createTextNode(data);
        itemList.appendChild(descToDo);
        itemList.appendChild(dataToDo);

        var btnModify = document.createElement('button');
        var btnDelete = document.createElement('button');
        btnModify.innerHTML = 'Modifica';
        btnDelete.innerHTML = 'Elimina';

        itemList.appendChild(btnModify);
        itemList.appendChild(btnDelete);

        btnModify.addEventListener('click', modifyToDo, false);
        btnDelete.addEventListener('click', deleteToDo, false);

        lista.appendChild(itemList);

        document.getElementById('item').value = '';
        document.getElementById('data').value = '';

        function modifyToDo(){
            document.getElementById("item").value = item;
            document.getElementById("data").value = data;

            lista.removeChild(itemList);
        }
        
        function deleteToDo(){
            lista.removeChild(itemList);
        }

    } else {
        alert('Completa i campi richiesti');
    }
}

btn.addEventListener('click', aggiungiToDo, false);


function stampaFeedback(){

    var elencoToDo = document.getElementsByTagName('li');

    for (var i = 0; i < elencoToDo.length; i++) {

        var itemToDo = elencoToDo[i].childNodes.item(0).nodeValue;
        var dataToDo = elencoToDo[i].childNodes.item(1).nodeValue;
        
        var toDo = new objToDo(itemToDo, dataToDo);
        
        toDos.push(toDo);
    }

    if (Modernizr.sessionstorage) {

        if (toDos.length != 0) {
            
        var jsonString = JSON.stringify(toDos);
        sessionStorage.setItem('toDos', jsonString);

        feedback.innerHTML = jsonString;

        }
    } 
}

// COSTRUTTORE 
function objToDo(item, data){
    this.item = item;
    this.data = data;
}

var btnStampa = document.getElementById('btnStampa');
var feedback = document.getElementById('feedback');

btnStampa.addEventListener('click', stampaFeedback, false);


function recuperaVersione(){

    if (Modernizr.sessionstorage && Modernizr.localstorage) {    

        if (sessionStorage.getItem('toDos') != "null") {
            var utenteOBJ = sessionStorage.getItem('toDos');
            vecchiaVers.innerHTML = utenteOBJ;
        }
    }
}

var btnRecupera = document.getElementById('btnRecupera');
var vecchiaVers = document.getElementById('vecchiaVers');
btnRecupera.addEventListener('click', recuperaVersione, false);






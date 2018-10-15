const buttonAdd = document.querySelector('#dodaj');
buttonAdd.addEventListener('click', function(){
   document.getElementById('tekst').textContent = 'Akademia 108'; 
});

const buttonRemove = document.querySelector('#usun');
buttonRemove.addEventListener('click', function(){
   document.getElementById('tekst').remove(); 
});
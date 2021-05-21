function ajoutTache() 
{
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(tache.value));
    newapp.appendChild(listItem);
    // newapp.innerHTML +='<li>' + tache.value +  '</li>';
    $(listItem).on('swiperight', function()
    {
        // $(this).toggleClass('tache-done');
        // listItem.className +='tache-done';
        if (listItem.className.indexOf('tache-done') == -1){
            
            listItem.classList.add("tache-done");
        }else{
            listItem.className = listItem.className.replace('tache-done', '');
        }
    })
    $(listItem).on('swipeleft', function()
    {
        let deleteDirectly = true;
        if (listItem.className.indexOf('tache-done') == -1){
            deleteDirectly = confirm("Tache non terminée. Supprimer?")
        }
        if (deleteDirectly){
            $(listItem).hide('slow', function(){
                listItem.remove();
            });
        }
    })
    $(newapp).listview('refresh');
}
function anade(){
    let item = document.getElementById('nuevoAlimento').value;
    const list = document.getElementById('lista');

    if (item.trim() === ''){
        return;
    }
    const  listItem = document.createElement('li');
    const itemContent = document.createTextNode(item);

    list.appendChild(listItem);
    listItem.appendChild(itemContent);

    document.getElementById('nuevoAlimento').value = '';
}
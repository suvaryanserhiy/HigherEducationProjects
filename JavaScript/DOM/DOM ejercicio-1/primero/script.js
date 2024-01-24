window.onload = function () {
    const body = document.body;

    if (!body) {
        console.log('Body element not found.');
        return;
    }

    const ol = document.createElement('ol');

    const items = ["elemento1", "elemento2", "elemento3"];
    items.forEach(textContent => {
        const li = document.createElement('li');
        li.textContent = textContent;
        ol.appendChild(li);
    });

    body.appendChild(ol);

    const listItems = body.querySelectorAll("li");

    if (listItems.length > 0) {
        const middleIndex = Math.floor(listItems.length / 2);
        const middleItem = listItems[middleIndex];

        console.log(middleItem.textContent);
        logSiblingTextContent(middleItem.previousElementSibling);
        logSiblingTextContent(middleItem.nextElementSibling);
    } else {
        console.log('No list items found.');
    }

    //Combined sibling logging logic into a separate function for cleaner code.
    function logSiblingTextContent(sibling) {
        if (sibling) {
            console.log(sibling.textContent);
        }else {
            console.log("sibling doen't exists");
        }
    }
};

window.onload = function () {
    const body = document.body;
    const ul = document.createElement('ul');

    const linksContents = ['link1', 'link2', 'link3', 'link4', 'link5'];

    linksContents.forEach(linkContent => {
        const li = document.createElement('li');
        li.appendChild(createLink('#', linkContent));
        ul.appendChild(li);
    });

    body.appendChild(ul);

    const links = document.querySelectorAll('a');

    links[0].classList.add('enlace');
    links[3].classList.add('enlace');

    links.forEach(link => {
        if (link.classList.contains('enlace')) {
            link.classList.replace('enlace', 'nuevoEnlace');
        } else {
            link.classList.add('enlace');
        }
    });

    // function to create link ("a" tag)
    function createLink(href, textContent) {
        const a = document.createElement('a');
        a.setAttribute('href', href);
        a.textContent = textContent;
        return a;
    }
};

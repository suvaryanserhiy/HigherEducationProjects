window.onload = function () {
    // COUNT PARAGRAPHS IN DIV
    // let paragraphs = document.getElementsByTagName('p');
    // let paragraphCount = paragraphs.length;
    //
    // let div = document.getElementsByTagName('div')[0]; // Get the first div element
    // div.innerHTML = paragraphCount;

    // GET TEXT FROM FIST NODE
    // let fistNode = document.getElementById('myDiv');
    //
    // console.log(fistNode.textContent);

    // GET TEXT FROM EVERY NODE

    // let node = document.getElementsByTagName('div');
    //
    // for (let nodeElement of node) {
    //     console.log(nodeElement.textContent)
    // }

    //GET NUMBER OF PARAGRAPHS IN ARTICLE

    // let article = document.getElementById('like');
    // let paragraph = article.getElementsByTagName('p')
    // console.info(paragraph.length)

    // GET CONTENT OF LAST P ELEMENT

    // let p = document.getElementsByTagName("p")
    // console.info(p[p.length-1].textContent);

    //GET CONTENT  OF THE LAST PARAGRAPH IN ARTICLE

    let article = document.getElementById('like');
    let lastP = article.getElementsByTagName('p')

    console.info(lastP[lastP.length-1].textContent)


};
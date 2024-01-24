window.onload = function () {
    const body = document.body;

    if (body) {
        const div = document.createElement('div');
        body.appendChild(div);
        

        Object.assign(div.style, {
            width: '30%',
            height: '250px',
            borderTop: '5px dashed #00FF00',
            paddingLeft: '15px',
            marginBottom: '25px'
        });
    }
};

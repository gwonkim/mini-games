const explain = () => {
    const explainBox = document.querySelector('#explain');
    console.log('explainBox.classList', explainBox.classList);
    if(explainBox.classList[0] === 'explainBox') {
        explainBox.classList.remove('explainBox');
        explainBox.classList.add('nonExplainBox');
    } else {
        explainBox.classList.remove('nonExplainBox');
        explainBox.classList.add('explainBox');
    }
};

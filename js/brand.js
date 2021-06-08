/* **************************************************
*   Author: Deniel Den
*  	Author URI: https://www.linkedin.com/in/denielden
*   Project: Brand Page
*	Version: 1.0.0
************************************************** */
// concept
let conceptOnOff = document.querySelector('#conceptOnOff');
conceptOnOff.addEventListener('click', () => {
    let grid = document.querySelector('#svgSezAurea').contentDocument.querySelector('#grid');
    grid.classList.toggle('d-none');
});

// configuation
let configuation = document.querySelector('#versioni ul');
const svgVersion = document.querySelector('#svgVersioni').contentDocument;
configuation.addEventListener('click', version, true);
function version(e){
    let ele = e.target.id;
    let v = ['verVerticale', 'verOrizzontale', 'verPittogramma'];
    console.log(v)
    v.forEach(vEle => svgVersion.querySelector('#'+vEle).style.display = 'none');
    svgVersion.querySelector('#'+ele).style.display = 'block';
}


// spacing
let spaceOnOff = document.querySelector('#spaceOnOff');
spaceOnOff.addEventListener('click', () => {
    let grid = document.querySelector('#svgSpace').contentDocument.querySelector('#grid');
    grid.classList.toggle('d-none');
});

// minimumSize 
let inputSizeLogo = document.getElementById('sizeLogo');
let logoSize = document.getElementById('logoSize');
let sizeOutput = document.getElementById('sizeOutput');
inputSizeLogo.addEventListener('mousemove', () => {
    logoSize.style.width = inputSizeLogo.value+'rem';
    sizeOutput.innerHTML = inputSizeLogo.value;
});


// variants
let variants = document.querySelector('#varianti ul');
variants.addEventListener('click', variant, true);
function variant(e){
    let ele = e.target.id;
    const boxVarianti = document.querySelector('#varianti');
    const objVarianti = document.querySelector('#svgVarianti').contentDocument;
    const svgVarianti = objVarianti.querySelector('svg');
    let colorPurple = objVarianti.querySelectorAll('.colorPurple');
    let colorOrange = objVarianti.querySelector('.colorOrange');
    
    let bgBox, txtColor, orangeColor, purpleColor;
    switch (ele) {
        case 'varBianco': 
            bgBox = '#ffffff';
            txtColor = orangeColor = purpleColor = '#000000';
            break;
        case 'varNero':
            bgBox = '#000000';
            txtColor = orangeColor = purpleColor = '#ffffff';
            break;
        case 'varColori':
            bgBox = '#ffffff';
            txtColor = '#000000';
            purpleColor = '#890052';
            orangeColor = '#ff9200';
            break;
        case 'varNegativo':
            bgBox = '#000000';
            txtColor = purpleColor = '#ffffff';
            orangeColor = '#ff9200';
            break;
        case 'varViola':
            bgBox = '#890052';
            txtColor = purpleColor = '#ffffff';
            orangeColor = '#ff9200';
            break;
    }

    boxVarianti.style.backgroundColor = bgBox;
    boxVarianti.style.color = txtColor;
    svgVarianti.style.color = txtColor;
    colorPurple.forEach(ele => ele.style.color = purpleColor);
    colorOrange.style.color = orangeColor;
}
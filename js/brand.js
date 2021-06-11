/* **************************************************
*   Author: Deniel Den
*  	Author URI: https://www.linkedin.com/in/denielden
*   Project: Brand Page
*	Version: 1.0.0
************************************************** */
// concept & minSpacing
const gridOnOff = document.querySelectorAll('#conceptOnOff, #spaceOnOff');
const labelAction = document.querySelectorAll('.label-action');
const gridAurea = document.querySelector('#svgSezAurea').contentDocument.querySelector('#grid');
const gridSpace = document.querySelector('#svgSpace').contentDocument.querySelector('#grid');
for (let i=0; i < gridOnOff.length; i++) {
    gridOnOff[i].addEventListener('click', () => {
        i==0 ? gridAurea.classList.toggle('d-none') : gridSpace.classList.toggle('d-none');
        labelAction[i].innerHTML === 'mostra griglia' ? labelAction[i].innerHTML = 'nascondi griglia' : labelAction[i].innerHTML = 'mostra griglia';
    });
}

// configuation
const configuation = document.querySelector('#versioni ul');
const svgVersion = document.querySelector('#svgVersioni').contentDocument;
configuation.addEventListener('click', version, true);
function version(e){
    let ele = e.target.id;
    svgVersion.querySelectorAll('g').forEach(e => e.style.display = 'none');
    switch (ele) {
        case 'verVerticale':
        case 'verOrizzontale':
            svgVersion.querySelector('#verPittogramma').style.display = 'block';
            svgVersion.querySelector('#'+ele).style.display = 'block';
            break;
        case 'verPittogramma':
            svgVersion.querySelector('#'+ele).style.display = 'block';
            break;
        case 'verLogotipo':
            svgVersion.querySelector('#verOrizzontale').style.display = 'block';
            break;
    }
}




// minSize 
const inputSizeLogo = document.querySelector('#sizeLogoBar');
const logoSize = document.querySelector('#logoSize');
const sizeOutput = document.querySelector('#sizeOutput');
inputSizeLogo.addEventListener('input', () => {
    logoSize.style.width = inputSizeLogo.value+'rem';
    sizeOutput.innerHTML = inputSizeLogo.value;
});

// variants
const variants = document.querySelector('#varianti ul');
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
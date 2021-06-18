/* **************************************************
*   Author: Deniel Den
*  	Author URI: https://www.linkedin.com/in/denielden
*   Project: Brand Page
*	Version: 1.0.0
************************************************** */
// concept & minSpacing
const gridOnOff = document.querySelectorAll('#conceptOnOff, #spaceOnOff');
const labelAction = document.querySelectorAll('.label-action');
window.onload = () => {
    const gridAurea = document.querySelector('#svgSezAurea').contentDocument.querySelector('#grid');
    const gridSpace = document.querySelector('#svgSpace').contentDocument.querySelector('#grid');
    for (let i=0; i < gridOnOff.length; i++) {
        gridOnOff[i].addEventListener('click', () => {
            i==0 ? gridAurea.classList.toggle('d-none') : gridSpace.classList.toggle('d-none');
            labelAction[i].innerHTML === 'mostra griglia' ? labelAction[i].innerHTML = 'nascondi griglia' : labelAction[i].innerHTML = 'mostra griglia';
        });
    }
}

// configuation
const configuation = document.querySelector('#versioni ul');
let svgVersion = document.querySelector('#svgVersioni').contentDocument;
configuation.addEventListener('click', version, true);
function version(e){
    let ele = e.target.id;
    svgVersion.querySelectorAll('g').forEach(ge => ge.style.display = 'none');
    switch (ele) {
        case 'verOrizzontale':
        case 'verVerticale':
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
    let val = parseInt(inputSizeLogo.value) + 6 + ' mm';
    val == '24 mm' ? val='&infin;' : val;
    sizeOutput.innerHTML = val;
});

// variants
const variants = document.querySelector('#varianti ul');
variants.addEventListener('click', variant, true);
function variant(e){
    let ele = e.target.id;
    const boxVarianti = document.querySelector('#varianti');
    const objVarianti = document.querySelector('#svgVarianti').contentDocument;
    const svgVarianti = objVarianti.querySelector('svg');
    let classPurple = objVarianti.querySelectorAll('.colorPurple');
    let classOrange = objVarianti.querySelector('.colorOrange');
    let bgBox, txtColor, orange, purple;
    switch (ele) {
        case 'varBianco': 
            bgBox = '#ffffff';
            txtColor = orange = purple = '#000000';
            break;
        case 'varNero':
            bgBox = '#000000';
            txtColor = orange = purple = '#ffffff';
            break;
        case 'varColori':
            bgBox = '#ffffff';
            txtColor = '#000000';
            purple = '#890052';
            orange = '#ff9200';
            break;
        case 'varNegativo':
            bgBox = '#000000';
            txtColor = purple = '#ffffff';
            orange = '#ff9200';
            break;
        case 'varViola':
            bgBox = '#890052';
            txtColor = purple = '#ffffff';
            orange = '#ff9200';
            break;
    }
    boxVarianti.style.backgroundColor = bgBox;
    boxVarianti.style.color = txtColor;
    svgVarianti.style.color = txtColor;
    classPurple.forEach(ele => ele.style.color = purple);
    classOrange.style.color = orange;
}

// typography
let typoE = document.querySelector('#typoE');
let gridTypoE = document.querySelector('#gridTypoE');
function inViewport(ele){
    let e = ele.getBoundingClientRect();
    return !(e.top > innerHeight/2 || e.bottom < 0);
}
document.addEventListener('scroll', e => {
    if(inViewport(typoE)){
        gridTypoE.style.display = 'block';
    } else {
        gridTypoE.style.display = 'none';
    }
});

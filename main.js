import navMain from './css-js/contentInterface/navMain/navMain.js';
import headerMain from './css-js/contentInterface/headerMain/headerMain.js';
import sectionMain from './css-js/contentInterface/sectionMain/sectionMain.js';
import sectionButton from './css-js/contentInterface/sectionButton/sectionButton.js';

const $root = document.querySelector("#root");

const $htmlnavMain = navMain();
const $htmlheaderMain = headerMain();
const $htmlsectionMain = sectionMain();
const $htmlsectionButton = sectionButton();
$root.insertAdjacentHTML(
    "beforeend", `
    ${$htmlnavMain}
    ${$htmlheaderMain}
    ${$htmlsectionMain}
    ${$htmlsectionButton}
    `);


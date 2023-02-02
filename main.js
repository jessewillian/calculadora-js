import navMain from './css-js/components/navMain/navMain.js';
import headerMain from './css-js/components/headerMain/headerMain.js';
import sectionMain from './css-js/components/sectionMain/sectionMain.js';
import sectionButton from './css-js/components/sectionButton/sectionButton.js';

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


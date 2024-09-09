import { Tooltip } from './tooltip.js';
const but = document.querySelector('.but');

const tooltipFactory = new Tooltip();
/* const actualMessages = []; */

but.addEventListener('click', () => {
    /* console.log(actualMessages.push(tooltipFactory.showTooltip('Заголовок', 'Текст'))) */

    const idNow = tooltipFactory.showTooltip('Заголовок', 'Текст', but);
    /* actualMessages.push(idNow); */

    setTimeout(() => {
        tooltipFactory.removeTooltip(idNow);
    }, 1000)
});

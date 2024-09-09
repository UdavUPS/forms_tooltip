/* export function showPopover(title, message, element) {} */

export class Tooltip {
    constructor() {
        this._tooltips = []
    }

    showTooltip(title, message, element) {
        const {right, top} = element.getBoundingClientRect(); 
        const tooltipElement = document.createElement('div');
        const elementTitle = document.createElement('div');
        const elementBody = document.createElement('div');

        tooltipElement.classList.add('tooltip-element');
        elementTitle.classList.add('element-title');
        elementTitle.textContent = title;
        tooltipElement.appendChild(elementTitle);
        elementBody.classList.add('element-body');
        elementBody.textContent = message;
        tooltipElement.appendChild(elementBody);
        tooltipElement.style.right = right - right/5.7 + 'px';
        tooltipElement.style.top = top - top/2.5 + 'px';


        const id = performance.now()


        this._tooltips.push({
            id,
            element: tooltipElement
        })

        document.body.appendChild(tooltipElement);

      /*console.log(this._tooltips);*/
        /* console.log(element.getBoundingClientRect()); */ 

        return id;
    }

    removeTooltip(id) {
        const tooltip = this._tooltips.find(t => t.id == id);

        tooltip.element.remove();

        this._tooltips = this._tooltips.filter(t => t.id !== id);
    }
}
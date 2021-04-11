class FaIcon extends HTMLElement{
    constructor(){
        super();
        this.getSVG();
    }

    async getSVG(){
        const brand = this.getAttribute('brand');
        const icon = this.getAttribute('icon');
        const res = await fetch(`public/fa-svgs/${brand}/${icon}.svg`);
        const svg = await res.text();
        this.innerHTML=svg;
    }
}

window.customElements.define('fa-icon', FaIcon);

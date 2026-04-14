document.addEventListener("DOMContentLoaded", () => {    
    const isHover = e => e.parentElement.querySelector(':hover') === e;
    document.querySelector("nav").addEventListener("click", (e) => {
        let hovered = isHover(e.currentTarget);
        if (hovered && e.target.nodeName == 'A' && e.target.parentElement.parentElement.parentElement.nodeName != 'NAV' && e.target.parentElement.parentElement.nodeName == 'UL') {
            // document.querySelectorAll("nav ul li:hover > ul").forEach(e => e.style.display = 'none');
            // e.target.parentElement.parentElement.style.display = 'none';
            
            // let parent = e.target.parentElement.parentElement;
            // if (parent.parentElement.nodeName != 'NAV') {
            //    let displayValue = parent.style.display;
            //     console.log(displayValue);
            //     parent.style.display = 'none';
                // window.setTimeout(() => e.target.parentElement.parentElement.style.display = '', 1000);
            // }
        }
    });
});

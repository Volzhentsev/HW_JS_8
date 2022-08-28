function blockVisible() {
    let reveal = document.querySelectorAll('.reveal');
    for (let el of reveal) {
            const {top, bottom} = el.getBoundingClientRect();
            if (top < window.innerHeight || bottom > 0) {
            el.className = 'reveal reveal_active'; 
            }
            if (top > window.innerHeight || bottom < 0) {
            el.className  = 'reveal';
            }
    }
}
window.addEventListener('scroll', ()  => {
    blockVisible();
});


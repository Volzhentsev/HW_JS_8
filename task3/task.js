function font() {
    let control = document.querySelector('.book__control');
    let fontSize = document.getElementById('book');
    control.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('font-size_active')) {
            control.querySelector('.font-size_active').classList.remove('font-size_active');
            e.target.classList.add('font-size_active');
            if (e.target.getAttribute('data-size') == 'small') {
                fontSize.classList.add('book_fs-small');
                fontSize.classList.remove('book_fs-big');
            } else if (e.target.getAttribute('data-size') == 'big') {
                fontSize.classList.add('book_fs-big');
                fontSize.classList.remove('book_fs-small');
            } else {
                fontSize.classList.remove('book_fs-big');
                fontSize.classList.remove('book_fs-small');
            }
        }
    })
}

font()


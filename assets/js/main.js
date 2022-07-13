const box = document.querySelector('.container');
let validator = false;

const handleClick = (e) => {
    if(!validator) {
        e.target.classList.add('open');
        validator = true
    } else {
        e.target.classList.remove('open');
        validator = false;
    }
}

box.addEventListener('click', handleClick);


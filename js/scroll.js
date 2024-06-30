const scrollIndicator = document.getElementById('scroll-indicator');
const toTopButton = document.getElementById('to-top');

toTopButton.style.opacity = '0'; // If the user has JS disabled, they can still use the button as it will always be visible.

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    const computedStyle = window.getComputedStyle(toTopButton);

    if (scrollPos < 500 && computedStyle.opacity === '0') { }
    else if (scrollPos < 500) {
        toTopButton.style.animation = 'fadeOut .25s ease-in forwards';
    }
    else {
        toTopButton.style.animation = 'fadeIn .25s ease-in forwards';
    }

    const equation = scrollPos >= 1000 ? 0 : Math.max(Math.exp(-scrollPos / 200), 0.006);
    scrollIndicator.style.opacity = equation;
});
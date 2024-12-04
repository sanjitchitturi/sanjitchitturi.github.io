document.addEventListener('DOMContentLoaded', function () {
    const dynamicWord = document.getElementById('dynamic-word');
    const words = ['Optimized.', 'Efficient.', 'Re-invented.', 'Seamless.'];
    let index = 0;

    function changeWord() {
        dynamicWord.style.opacity = 0; 
        setTimeout(() => {
            index = (index + 1) % words.length;
            dynamicWord.textContent = words[index];
            dynamicWord.style.opacity = 1; 
        }, 500); 

        setTimeout(changeWord, 3000); 
    }

    changeWord();
});

// JavaScript for Header Scroll Hide
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

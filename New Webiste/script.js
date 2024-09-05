document.addEventListener('DOMContentLoaded', function () {
    const dynamicWord = document.getElementById('dynamic-word');
    const words = ['Optimized', 'Efficient', 'Innovative', 'Seamless']; // Add your words here
    let index = 0;

    function changeWord() {
        dynamicWord.style.opacity = 0; // Start fade out
        setTimeout(() => {
            index = (index + 1) % words.length;
            dynamicWord.textContent = words[index];
            dynamicWord.style.opacity = 1; // Start fade in
        }, 500); // Delay for fade out

        setTimeout(changeWord, 3000); // Change word every 3 seconds
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
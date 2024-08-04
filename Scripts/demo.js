const powText = document.getElementById('powText');

powText.addEventListener('mouseover', () => {
    powText.style.transform = 'scale(1.2)';
    powText.style.color = '#000000';
});

powText.addEventListener('mouseout', () => {
    powText.style.transform = 'scale(1)';
    powText.style.color = '#ffffff';
});

powText.addEventListener('click', () => {
    powText.style.transform = 'scale(1.5)';
    setTimeout(() => {
        powText.style.transform = 'scale(1)';
    }, 300);
});

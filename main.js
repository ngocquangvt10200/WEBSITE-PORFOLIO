document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        const modal = document.getElementById('modal');
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-description').textContent = description;
        modal.style.display = 'block';
    });
});

document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
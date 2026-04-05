// Переключение темного / светлого режима
const themeToggleBtn = document.getElementById('theme-toggle');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}

// Инициализация по умолчанию
// Можно проверить сохранение темы в localStorage для устойчивости

if (!localStorage.getItem('theme')) {
    // Включаем светлую тему по умолчанию
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
} else {
    document.body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Модальное окно — пример для кнопки "Обо мне" на index.html
// (Можно добавить любой другой элемент, кнопку)

// Создадим модальное окно
const modal = document.createElement('div');
modal.id = 'myModal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = 0;
modal.style.left = 0;
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';

const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '8px';
modalContent.style.maxWidth = '400px';

modalContent.innerHTML = `
<h2>Связь Грязь</h2>
 <p>Email: azino@tritopora.com</p>
 <p>Телефон: +7 800 555 35 35</p>
<button id="closeModal">Закрыть</button>
`;

modal.appendChild(modalContent);
document.body.appendChild(modal);

const aboutMeBtn = document.getElementById('about-me');
const closeModalBtn = document.getElementById('closeModal');

aboutMeBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального по клику вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'projects.html';
});
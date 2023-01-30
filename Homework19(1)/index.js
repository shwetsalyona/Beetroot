const sidebarArrow = document.getElementById('sidebarArrow');
const sidebar = document.getElementById('sidebar');
const sidebarHeader = document.getElementById('sidebarHeader');

sidebarArrow.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-mini');
});

sidebarHeader.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-bg-dark');
});

window.addEventListener('load', () => {
    if (window.innerWidth <= 700) {
        sidebar.classList.add('sidebar-mini');
    }
});
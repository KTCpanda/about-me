function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const isOpen = menu.classList.toggle('open');
    overlay.style.display = isOpen ? 'block' : 'none';
}
document.getElementById('menuOverlay').onclick = function() {
    document.getElementById('sideMenu').classList.remove('open');
    this.style.display = 'none';
};

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.querySelector('.hamburger'); // ハンバーガーを取得
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('open'); // ハンバーガーにもopenクラスを追加
    overlay.style.display = isOpen ? 'block' : 'none';
}
document.getElementById('menuOverlay').onclick = function() {
    document.getElementById('sideMenu').classList.remove('open');
    document.querySelector('.hamburger').classList.remove('open'); // ハンバーガーのopenクラス削除
    this.style.display = 'none';
};

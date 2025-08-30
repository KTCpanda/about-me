// フォーム送信時の処理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            this.style.display = 'none';
            const thanksMessage = document.getElementById('thanksMessage');
            if (thanksMessage) {
                thanksMessage.style.display = 'block';
            }
        };
    }
});

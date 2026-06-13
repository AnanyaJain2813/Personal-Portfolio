const canvas = document.getElementById('cyberCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_@#$';
const fontSize = 14;
const columns = Math.floor(width / fontSize);
const rainDrops = Array(columns).fill(1);

function animateCanvas() {
    ctx.fillStyle = 'rgba(7, 10, 19, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#d946ef';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    requestAnimationFrame(animateCanvas);
}
animateCanvas();

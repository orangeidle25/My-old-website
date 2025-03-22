document.addEventListener('DOMContentLoaded', () => {
      const audio = document.getElementById('bg-music');
      audio.volume = 0.3;
      
      document.body.addEventListener('click', () => {
        audio.play().catch(() => {
          console.log('Audio playback requires user interaction');
        });
      }, { once: true });

      document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          btn.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translateY(0)';
        });
      });
    });
 
function discordpopup() {
  alert("Add me on Discord. Username: orangeidle25");
}
const urlParams = new URLSearchParams(window.location.search);
const gift = urlParams.get('gift');

if (gift) {
  const box = document.getElementById('gift-box');
  box.innerText = `🎁 Hediye Geldi: ${gift}`;
  setTimeout(() => {
    box.innerText = '';
  }, 5000);
}

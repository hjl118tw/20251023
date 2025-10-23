// 取得按鈕與提示文字元素
const thankButton = document.getElementById('thankBtn');
const thankMessage = document.getElementById('thankMessage');

// 點擊按鈕後顯示提示文字
thankButton.addEventListener('click', () => {
  thankMessage.textContent = "謝謝瀏覽我的名片！";
  thankMessage.style.display = "block";
});




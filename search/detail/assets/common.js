document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // ヘッダー読み込み + メニュー開閉
  // ------------------------------
  fetch("components/header.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;

      // メニュー開閉
      const toggle = document.getElementById("menuToggle");
      const sideMenu = document.getElementById("sideMenu");

      if (toggle && sideMenu) {
        toggle.addEventListener("click", () => {
          sideMenu.classList.toggle("open");
        });
      }
    })
    .catch(err => console.error("header.html の読み込みに失敗:", err));

  // ------------------------------
  // フッター読み込み
  // ------------------------------
  fetch("components/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(err => console.error("footer.html の読み込みに失敗:", err));

  // ------------------------------
  // スクロール進捗バー
  // ------------------------------
  const scrollProgress = document.getElementById("scrollProgress");
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      const headerHeight = 60;
      const bottomHeight = 60;
      const usableHeight = window.innerHeight - headerHeight - bottomHeight;
      scrollProgress.style.height = (progress / 100) * usableHeight + "px";
    });
  }
  
  // =============================
  // ページ共通：文字サイズ反映処理
  // =============================
  window.addEventListener('DOMContentLoaded', () => {
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedFontSize) {
      document.body.classList.remove('font-small', 'font-large');

      if (savedFontSize === 'small') {
        document.body.classList.add('font-small');
      } else if (savedFontSize === 'large') {
        document.body.classList.add('font-large');
      }
    }
  });

});




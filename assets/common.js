document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // ヘッダー読み込み + メニュー開閉
  // ------------------------------
  // header/footer を読み込む
  function loadHTML(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(`Error loading ${url}:`, err));
  }
  function loadHTML(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (id === "header") {
          // メニュー開閉の設定をヘッダー読み込み後に実行
          const toggle = document.getElementById("menuToggle");
          const sideMenu = document.getElementById("sideMenu");
          if (toggle && sideMenu) {
            toggle.addEventListener("click", () => {
              sideMenu.classList.toggle("open");
            });
            // メニュー内リンクをクリックしたら閉じるようにしておくのも親切
            sideMenu.querySelectorAll("a").forEach(link => {
              link.addEventListener("click", () => {
                sideMenu.classList.remove("open");
              });
            });
          }
        }
      })
      .catch(err => console.error(`Error loading ${url}:`, err));
  }

  // ヘッダーとフッター読み込み
  loadHTML("header", "/components/header.html");
  loadHTML("footer", "/components/footer.html");


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




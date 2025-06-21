const img = document.getElementById("clickImage");
const leftMenu = document.getElementById("leftMenu"); // 左メニューを取得
const rightMenu = document.getElementById("rightMenu"); 
const UpMenu = document.getElementById("UpMenu");
const DownMenu = document.getElementById("DownMenu");
const moe1 = document.getElementById("moe1");
const moe2 = document.getElementById("moe2");
const statusText = document.getElementById("statusText"); // ステータステキスト要素を取得

let isSecondImage = false;

img.addEventListener("click", function () {
  if (!isSecondImage) {
    // OFF 
    img.src = "pandaman.png"; // 2枚目の画像 (pandaman.png)  // 1枚目→2枚目に切り替え
    leftMenu.style.display = "flex"; // 左メニュー表示
    rightMenu.style.display = "flex"; 
    UpMenu.style.display = "flex";
    DownMenu.style.display = "flex";
    moe1.style.display = "flex";
    moe2.style.display = "flex";
    isSecondImage = true;
    if (statusText) { // statusText要素が存在する場合のみ処理
      statusText.textContent = "ON"; // テキストをONに変更
    }
  } else {
    
    img.src = "panda3.png"; // 1枚目の画像 (pandaman2.png)  // 2枚目→1枚目に戻す
    leftMenu.style.display = "none"; // 左メニュー非表示
    rightMenu.style.display = "none"; 
    UpMenu.style.display = "none";
    DownMenu.style.display = "none";
    moe1.style.display = "none";
    moe2.style.display = "none";
    isSecondImage = false;
    if (statusText) { // statusText要素が存在する場合のみ処理
      statusText.textContent = "OFF"; // テキストをOFFに変更
    }
  }
});




// 💡 備註：這是 JavaScript 的主執行區塊
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 導覽列變色功能 ---
    const navbar = document.querySelector('.navbar');
    // 💡 備註：定義觸發變色的滾動距離
    const scrollThreshold = 100; 

    function checkNavbarColor() {
        // 檢查垂直滾動距離是否超過閾值
        if (window.scrollY > scrollThreshold) {
            // 滾動超過 100px，添加 'scrolled' 類別來變色
            navbar.classList.add('scrolled');
        } else {
            // 在頂部，移除 'scrolled' 類別，變回透明
            navbar.classList.remove('scrolled');
        }
    }

    // 為滾動事件添加監聽器
    window.addEventListener('scroll', checkNavbarColor);
    // 頁面載入時檢查一次，以防頁面載入時已經不在頂部
    checkNavbarColor(); 

    // --- 滾動內容淡入功能 (步驟 11 的程式碼) ---
    
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150; 

        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    checkReveal();
    // ---------------------------------------------
});
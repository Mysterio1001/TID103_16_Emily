// 獲取 "返回頂部" 按鈕
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 當用戶滾動頁面時觸發
window.onscroll = function () {
    // 如果滾動距離大於 200px，顯示按鈕，否則隱藏
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// 點擊按鈕時，平滑滾動到頁面頂部
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

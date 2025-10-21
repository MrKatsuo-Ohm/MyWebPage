document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const btn = document.getElementById("loginBtn");
  const closeBtn = document.querySelector(".close");

  if (!btn) {
    console.error("❌ ไม่พบปุ่ม loginBtn ในหน้า HTML");
    return;
  }

  // เปิด popup
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // ปิด popup
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // คลิกนอก popup เพื่อปิด
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

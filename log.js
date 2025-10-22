// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("loginModal");
//   const btn = document.getElementById("loginBtn");
//   const closeBtn = document.querySelector(".close");

//   if (!btn) {
//     console.error("❌ ไม่พบปุ่ม loginBtn ในหน้า HTML");
//     return;
//   }

//   // เปิด popup
//   btn.addEventListener("click", () => {
//     modal.style.display = "flex";
//   });

//   // ปิด popup
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//   });

//   // คลิกนอก popup เพื่อปิด
//   window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });
// เปิด / ปิด popup
/* เปิด/ปิด modal */
const modal = document.getElementById('loginModal');
const openBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.modal .close');

function openModal(){
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
  document.getElementById('email').focus();
}
function closeModal(){
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
}

openBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);

/* ปิดเมื่อคลิกรอบนอก */
window.addEventListener('click', (e) => {
  if(e.target === modal) closeModal();
});

/* toggle password visibility */
const toggle = document.querySelector('.toggle-pass');
toggle?.addEventListener('click', () => {
  const pass = document.getElementById('password');
  if(!pass) return;
  pass.type = pass.type === 'password' ? 'text' : 'password';
  toggle.textContent = pass.type === 'password' ? '👁️' : '🙈';
});

/* ตัวอย่างการ handle form submit (ป้องกัน refresh) */
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  // ใส่ logic การล็อกอินที่ต้องการ (เรียก API เป็นต้น)
  alert('ส่งข้อมูลล็อกอิน: ' + document.getElementById('email').value);
  // closeModal(); // ถ้าต้องการปิดอัตโนมัติ
});
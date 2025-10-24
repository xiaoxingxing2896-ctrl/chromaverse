
// script.js - 轻量交互
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
  // placeholder buy button behavior
  document.querySelectorAll('.buy-button').forEach(b=>{
    b.addEventListener('click', e=>{
      e.preventDefault();
      alert('这是预留的购买/支付接口按钮，部署时请替换为真实链接。');
    });
  });
});

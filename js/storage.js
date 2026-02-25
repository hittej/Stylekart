
function saveCart(cart){ localStorage.setItem("cart", JSON.stringify(cart)); }
function loadCart(){ return JSON.parse(localStorage.getItem("cart")) || []; }

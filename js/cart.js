
let CART = loadCart();
let PRODUCTS_CACHE = [];

function setProductsCache(p){ PRODUCTS_CACHE = p; }

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
  renderCart();
}

function addToCart(id){
  const item = CART.find(i=>i.id===id);
  if(item) item.qty++;
  else CART.push({id, qty:1});
  saveCart(CART);
  renderCart();
}

function calculateTotal(){
  let total = 0;
  CART.forEach(c=>{
    const p = PRODUCTS_CACHE.find(x=>x.id===c.id);
    if(p) total += p.price * c.qty;
  });
  return total;
}

async function placeOrder(){
  const user = auth.currentUser;
  if(!user) return alert("Login first");

  await db.collection("orders").add({
    userId: user.uid,
    items: CART,
    total: calculateTotal(),
    createdAt: new Date()
  });

  CART = [];
  saveCart(CART);
  renderCart();
  alert("Order placed!");
}

function changeQty(id, change){
  const item = CART.find(i=>i.id===id);
  item.qty += change;
  if(item.qty<=0) CART = CART.filter(i=>i.id!==id);
  saveCart(CART);
  renderCart();
}

function renderCart(){
  const container = document.getElementById("cart-items");
  if(!container) return;
  container.innerHTML = "";
  CART.forEach(c=>{
    const p = PRODUCTS_CACHE.find(x=>x.id===c.id);
    if(!p) return;
    container.innerHTML += `
      <div class="cart-item">
        <div>${p.name}<br>₹${p.price}</div>
        <div>
          <button class="qty-btn" onclick="changeQty('${c.id}',-1)">-</button>
          ${c.qty}
          <button class="qty-btn" onclick="changeQty('${c.id}',1)">+</button>
        </div>
      </div>`;
  });
  document.getElementById("total").innerText = "Total: ₹" + calculateTotal();
}

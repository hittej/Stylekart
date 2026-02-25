
async function loadProducts(){
  const snapshot = await db.collection("products").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
function renderProducts(list){
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <div class="brand">${p.name}</div>
        <div class="price">₹${p.price}</div>
        <button class="add-btn" onclick="addToCart('${p.id}')">Add to Bag</button>
      </div>`;
  });
}

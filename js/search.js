
function attachSearch(products){
  const input = document.getElementById("search");
  if(!input) return;
  input.addEventListener("input", e=>{
    const v = e.target.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(v));
    renderProducts(filtered);
  });
}

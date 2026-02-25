
(async function(){
  const products = await loadProducts();
  setProductsCache(products);
  renderProducts(products);
  attachSearch(products);
  renderCart();

  auth.onAuthStateChanged(async user => {
    if(!user) return;
    await db.collection("users").doc(user.uid).set({
      email: user.email || null,
      phone: user.phoneNumber || null,
      createdAt: new Date()
    }, { merge: true });
  });
})();

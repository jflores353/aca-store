// Code goes here

let state = {
    searchText:"",
    currentProductToAdd:null
  }
  let cart = [];
  let addCartButton = null;
  let txtEmail = null;
  let txtPassword = null;
  let btnSignUp = null;
  let signup = null;
  let home = null;
  let mainDiv = null;
  
  
  window.onload = function(){
    mainDiv = document.getElementById("main");
    signup = document.getElementById("signup");
    home = document.getElementById("home");
  
    
    addCartButton = document.getElementById("btnAddToCart");
    txtEmail = document.getElementById("email");
    txtPassword = document.getElementById("password");
    btnSignUp = document.getElementById("btnSignUp");
    btnSignUp.onclick = signUp;
    listProducts(products);
    
    
  }
  function signUp(){
    let email = txtEmail.value;
    let password = txtPassword.value;
    home.style.display = "block";
    signup.style.display = "none";
  }
  function searchTextChanged(e){
    state.searchText = e.value;
  }
  function search(){
    let filteredProducts = products.filter(p=>p.name.indexOf(state.searchText) > -1);
    listProducts(filteredProducts);
  }
  
  function showProductDetail(id){
    addCartButton.style.display = "block";
    let product = products.find(p=>p._id === id);
    state.currentProductToAdd = product;
      mainDiv.innerHTML = product.description;
  }
  function listProducts(products){
    let prodDivs = products.map(p=>{
      return `<hr><div onclick="showProductDetail(${p._id})">${p.name}</div>`
      
    });
    mainDiv.innerHTML = prodDivs.join("");
  }
  function addToCart(prod){
    cart.push(prod);
    showHome();
  }
  function showHome(){
    addCartButton.style.display = "none";
    state.currentProductToAdd = null;
    listProducts(products);
  }
  function placeOrder(){
   
  }
  function showCart(){
    listProducts(cart);
    var e = document.createElement('div');
    e.innerHTML = "<button onClick='placeOrder()'>Place Order</button>";
    mainDiv.appendChild(e);
  }
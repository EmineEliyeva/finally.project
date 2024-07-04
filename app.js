const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}
function loadContent(){
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });


  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });
  
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}

function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.cart-watch-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.watch-title').innerHTML;
 let price=food.querySelector('.watch-price').innerHTML;
 let imgSrc=food.querySelector('.shop-watch-img').src;
 let id = title + price + imgSrc; // 
 let newProduct = { id, title, price, imgSrc };
 if (itemList.find((el) => el.id === id)) { 
   alert("The product has already been added to the cart");
   return;
 } else {
   itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-watch-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("$",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="$"+(price*qty);

  });

  totalValue.innerHTML='$'+total;

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}

document.addEventListener('DOMContentLoaded', loadFood);

const CART_STORAGE_KEY = 'cartItems';
function loadFood() {
    let savedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCartItems) {
        itemList = JSON.parse(savedCartItems);
        updateCartUI();
    }
    loadContent();
}
function updateCartUI() {
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.innerHTML = '';
    itemList.forEach(item => {
        let newProductElement = createCartProduct(item.title, item.price, item.imgSrc);
        let element = document.createElement('div');
        element.innerHTML = newProductElement;
        cartBasket.appendChild(element);
    });
    updateTotal();
}

function saveCartToStorage() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(itemList));
}

    window.onload = function() {
        const queryParams = new URLSearchParams(window.location.search);

        const totalPrice = queryParams.get('totalPrice');

       

        const displayTotalPriceElement = document.getElementById('displayTotalPrice');
        if (displayTotalPriceElement) {
            displayTotalPriceElement.textContent = totalPrice;
        }
        const displayTotalPriceElement2 = document.getElementById('displayTotalPrice2');
        if (displayTotalPriceElement2) {
            displayTotalPriceElement2.textContent = totalPrice;
        }
    };
    document.addEventListener('DOMContentLoaded', (event) => {
      const placeOrderButton = document.querySelector('.btn-buy');
  
      placeOrderButton.addEventListener('click', () => {
          const totalPrice = document.querySelector('.total-price').textContent;
          window.location.href = `/order/order.html?totalPrice=${encodeURIComponent(totalPrice)}`;
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    let quantity = parseInt(document.getElementById('quantity').textContent, 10);
    const pricePerItem = 20; 
    
    function updateTotalPrice() {
        const totalPrice = quantity * pricePerItem;
        document.querySelectorAll('.displayTotalPrice').forEach(function(element) {
            element.textContent = `${totalPrice} TL`;
        });
    }

    document.getElementById('increaseQuantity').addEventListener('click', function() {
        quantity += 1;
        document.getElementById('quantity').textContent = quantity;
        updateTotalPrice();
    });

    document.getElementById('decreaseQuantity').addEventListener('click', function() {
        if (quantity > 1) { 
            quantity -= 1;
            document.getElementById('quantity').textContent = quantity;
            updateTotalPrice();
        }
    });

    updateTotalPrice(); 
});

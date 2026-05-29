export function getCart(){
    return JSON.parse(localStorage.getItem('myCart') || '[]');
}

function saveCart(cartArray){
    localStorage.setItem("myCart", JSON.stringify(cartArray));
}

export function addToCart(product){
    let currentCart = getCart();
    let existingItem=currentCart.find(item=>item.id===product.id);
    if(existingItem){
        existingItem.quantity+=1;
    }
    else{
        currentCart.push({...product, quantity: 1});
    }
    saveCart(currentCart);
}

export function getCartTotal(){
    const currentCart=getCart();
    return currentCart.reduce((total,item)=>total+item.price*item.quantity,0);
}
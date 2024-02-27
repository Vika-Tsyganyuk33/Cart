'use strict'
let cart = [];
class Item {
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.count = 1;
    }
}
let butAddCart = document.querySelectorAll('.card .btn-primary');
butAddCart.forEach(item => item.addEventListener('click', toAddCart));
function toAddCart(event){
    let parent = event.target.closest('.card');
    let name = parent.querySelector('.card-title').innerText;
    let price = parseInt(parent.querySelector('.price').innerText.split(' ').join(''));
    let img = parent.querySelector('img').getAttribute('src');
    let elem = cart.find(item => item.name == name);
    // console.dir(elem);
    if(elem){
        elem.count++;
    }else{
        cart.push(new Item(name, price, img))
    }
}
let sum ="";
 let summ = 0;
 let i = [];
let cartOpen = document.querySelector('.cart-open');
cartOpen.addEventListener('click', toRender);
function toRender(){
    let cartTable = document.querySelector('.cart-table');
    let tBody = cartTable.querySelector('tbody');
    tBody.innerHTML = '';
    cart.forEach((item, index) =>{
        tBody.insertAdjacentHTML('beforeend', `
            <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td><img src=${item.img}></td>
            <td>${item.price}</td>
            <td>${item.count}</td>
            <td>${item.count * item.price}</td>
            <td></td>
            </tr>
        `)
 
sum= `${item.count * item.price}`;
sum = +sum;
i.push(sum);
   })
   i.forEach(item => summ=item+summ);
   let cartSum = document.querySelector(".cart-sum");
   cartSum.innerText="";
   cartSum.innerText= `${summ}`;
   i=[];
   summ = 0;
}

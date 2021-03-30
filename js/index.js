// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price*quantity;

  product.querySelector('.subtotal span').innerText = subtotal;
  console.log('Calculating subtotal, yey!', subtotal);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  allProductsArr = [...allProducts];
  let total = 0;
  allProductsArr.forEach(product => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode
  row.remove();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const btnRemove = document.querySelectorAll('.btn-remove');

  const btnRemoveArr = [... btnRemove];
  btnRemoveArr.forEach(btn => {

    btn.addEventListener('click', removeProduct);

  });
});

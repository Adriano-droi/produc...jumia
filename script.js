const products = [
  { id: 1, name: "Gaming Mouse", price: 1500, category: "gaming", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCSjEnD50Z4fUignSQ9Dpf5rXS7tXg9BYllejMJLwCF5utV3bmajO8N4DMDP0U_glGQWavQJqew-0cH_Gqq3XX-DkjItlyNHwcjaIKFsl2IjI7SaUrBA9ZFHTysImFIc2QNAsT3g&usqp=CAc" },
  { id: 2, name: "Gaming Headset", price: 2500, category: "gaming", img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg" },
  { id: 3, name: "RGB Keyboard", price: 3500, category: "gaming", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_4khcN-j4iQSspfPS3jlcKj_TSiS727CcA&s" },
  { id: 4, name: "Dance Sneakers", price: 3000, category: "dance", img: "https://cdn.shopify.com/s/files/1/0752/7776/2878/files/Fuego-Low-Top-Dance-Sneakers-Champagne-3.jpg?v=1770059234" },
  { id: 5, name: "Dance Outfit", price: 4000, category: "dance", img: "https://i.pinimg.com/236x/9f/e2/1d/9fe21dbe1a46ff48de9fca8d8ee62409.jpg" },
  { id: 6, name: "LED Dance Mat", price: 5000, category: "dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmrxPR1YMf7ESMth2a10i03QD5wE6Du7ibA&s" },
  {id: 7, name: "Gaming Chair", price: 8000, category: "gaming", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3abSF87ZuaPv82CJQK4wJTuh3Fso8c5mHQ&s" },
  {id: 8, name: "Dance Gloves", price: 1200, category: "dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetFbhVbxUSLG9GyM-m0j7oGQb1nFVSEsuXg&s" },
  {id: 9, name: "Gaming Monitor", price: 15000, category: "gaming", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBOdnIXszCnA1QQm5f7Gz8x25fZNR6hw0LQ&s" },
  {id: 10, name: "Dance Hat", price: 800, category: "dance", img: "https://www.topperzstoreusa.com/media/22/79/ae/1773837626/32762-new_era_sugar_land_space_cowboys_59fifty_fitted_cap_NES9984_1.jpg?ts=1773837626" },
  {id: 11, name: "Gaming Console", price: 30000, category: "gaming", img: "data:image/jpeg;base64,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" },
  {id: 12, name: "Dance Leggings", price: 2000, category: "dance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQGps55RWUjTM7Gb40wvuTMczAw9Po4ofpQ&s" }//this are just sample products, you can replace them with actual products and images from your store

];

let cart = 0;// this variable will keep track of the number of items in the cart  

const productList = document.getElementById("product-list");// this is the container where we will display the products
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

function displayProducts(items) {
  productList.innerHTML = "";// clear previous products

  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("card");// add a class for styling

    div.innerHTML = `
      <img src="${product.img}">
      <h3>${product.name}</h3>
      <p>KES ${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;// set the inner HTML of the card with product details

    productList.appendChild(div);
  });// add the card to the product list container
}

function addToCart() {
  cart++;
  cartCount.textContent = cart;
}// this function will be called when the "Add to Cart" button is clicked, it increments the cart count and updates the display

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );// filter products based on search input
  displayProducts(filtered);
});

// load all products
displayProducts(products);
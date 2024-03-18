<template>
	<Navbar  />
	<div class="container">

		<!-- 購物車 -->
		<div class="cart" @click="toggleCartModal">
			<!-- <span class="cart-count">{{ cartCount }}</span> -->
    		<img src="../assets/images/300.png" class="cart-image">
        <P>({{ cartCount }})</P>
		</div>

		 <!-- 購物車內容模態框 -->
		 <div v-if="showCart" class="modal">
			<div class="modal-content">
			<h3>購物車內容</h3>
			<ul>
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <img :src="item.image" alt="Product Image" class="item-image">
            <div class="item-description">
                {{ item.name }} <br> 尺寸: {{ item.size }} - 數量: {{ item.quantity }}
                <br>
                ${{ item.money }}
            </div>
        </li>
      </ul>
      <div class="total">
        <!-- <p>總金額 <span>${{ totalAmount }}</span></p> -->
      </div>

      <div class="item_move">
        <button @click="showCart = false">關閉</button>
        <p>總金額 <span>${{ totalAmount }}</span></p>
        <router-link to="/pay" class="button-style">結帳</router-link>
      </div>
        
			</div>
		</div>
    <div class="title">
      <h4>歡迎選購各式衣物</h4>
    </div>
    <!-- 筛选按钮 -->
    <div class="filter_kind">
      <button class="button-style" @click="updateFilter('全部')">全部</button>
      <button  class="button-style" @click="updateFilter('衣服')">衣服</button>
      <button class="button-style" @click="updateFilter('褲子')">褲子</button>
    </div>


	  <!-- Main Content -->
	  <div class="main-content">
      
		<div class="product-section">
		  <!-- Product Cards -->
		  <div class="product-card" v-for="(product, index) in filteredProducts" :key="index">
			<img :src="product.image" alt="Product Image" class="product-image">
			<div class="product_des">
				<h3>{{ product.name }}</h3>
        <div class="text-with-ellipsis">
          <p>{{ product.description }}</p>
        </div>
        <p>${{ product.money }}</p>
			</div>
			<button class="button-style" @click="openModal(product)">Add to Cart</button>
		  </div>
		</div>
	  </div>
  

	  <!-- 模態框 -->
	<div v-if="showModal" class="modal">
		<div class="modal-content">
		<h3>商品名稱: {{ selectedProduct.name }}</h3>
    <h3>售價: {{ selectedProduct.money }}</h3>
    <img :src="selectedProduct.image"  class="product-image">

    <section class="buy_item" >
      <div class="item_size">
			<h4>尺寸</h4>
			<select v-model="selectedSize">
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="2XL">2XL</option>
        <option value="3XL">3XL</option>
			</select>
		</div>
      <div class="item_num">
        <h4>件數</h4>
        <button class="qual" @click="decreaseQuantity">-</button>
        <input type="number" v-model="quantity" min="1">
        <button class="qual" @click="increaseQuantity">+</button>
      </div>    
    </section>
    <div class="item_move">
        <button  class="button-style" @click="closeModal">取消</button>
        <button class="button-style" @click="addToCartWithQuantity">添加到購物車</button>
      </div>
		</div>
	</div>
</div>
  <!-- Footer -->
  <Ft></Ft>
</template>

<script setup>	  
import { ref, computed } from 'vue';
import Navbar from '../components/Navbar.vue';
import Ft from '../components/Footer.vue';
import { useProductsStore } from '../stores/productsStore.js'; // 確保路徑正確

const { products, addProduct, getAllProducts, cart, addToCart } = useProductsStore();

// const cartCount = computed(() => cart.value ? cart.value.length : 0);

console.log(cart);
const cartCount = computed(() => cart.length);


// <!-- 彈出 -->
const showModal = ref(false);
const selectedProduct = ref({});
const quantity = ref(1);
const selectedSize = ref('M'); // 預設尺寸

const openModal = (product) => {
  showModal.value = true;
  selectedProduct.value = product;
  quantity.value = 1;
};

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCartWithQuantity = () => {
  const productToAdd = { 
    ...selectedProduct.value, 
    quantity: quantity.value, 
    size: selectedSize.value 
  };
  addToCart(productToAdd);
  closeModal();

  console.log(cart.value)
};
// <!-- 彈出結束 -->

//詳細咚咚 
const showCart = ref(false);

const toggleCartModal = () => {
  showCart.value = !showCart.value;
};


const closeModal = () => {
  showModal.value = false;
};

// fliter
const currentFilter = ref('全部');
function updateFilter(newFilter) {
  currentFilter.value = newFilter;
}
console.log(products)
const filteredProducts = computed(() => {
  if (currentFilter.value === '全部') {
    return products;
  }
  return products.filter(products => products.kind === currentFilter.value);
});

// Calculate total

const totalAmount = computed(() => {
  return cart.reduce((acc, item) => acc + item.money * item.quantity, 0);
});

</script>


<style scoped>

.button-style {
  background-color: #ffffff; /* 绿色背景 */
  color: black; /* 白色文本 */
  padding: 3px 5px; /* 上下 10px, 左右 20px 的内边距 */
  border: 1px solid black; /* 无边框 */
  border-radius: 5px; /* 边角圆滑度 */
  cursor: pointer; /* 鼠标悬停时的指针样式 */
  transition: background-color 0.3s; /* 背景色变化的过渡效果 */
}

.button-style:hover {
  background-color: #383938; /* 鼠标悬停时的背景色 */
  color: white;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  display: flex;
  justify-content: space-around;
}

.product-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  width: calc(50% - 20px); /* 默認情況下，每行兩個產品 */
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;
}

.product-image {
  width: 100%;
  height: 55%;
  object-fit: cover; /* 確保圖片在不失真的情況下填滿容器 */
  overflow: hidden; /* 隱藏超出容器部分的圖片 */
}
.product_des{
	height: 33%;
}
/* 中等屏幕尺寸下（例如宽度大于768px），每行显示两个产品 */
@media (min-width: 768px) {
  .product-card {
    width: calc(50% - 20px);
  }
}

/* 更大屏幕尺寸下（例如宽度大于1024px），每行显示三个产品 */
@media (min-width: 1024px) {
  .product-card {
    width: calc(33.333% - 20px);
  }
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
}

.title h4{
  margin: 0 auto;
  font-size: larger;
  font-weight: 600;
}
.title{
  width: fit-content;
}

/* 彈出 */
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.modal h3{
  font-size: 20px;
  font-weight: 550;
}

.modal-content {
  position: fixed;
  max-width: 500px; /* 或您希望的任何最大寬度 */
  max-height: 70%; /* 设置最大高度 */
  overflow-y: auto; /* 当内容超出最大高度时，允许垂直滚动 */
  background: white;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 其他樣式保持不變 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}
.item_size {
  margin-top: 5px;
  margin-bottom: 5px; 
  display: flex;
}

select, input[type="number"] {
    width: 30%;
    padding: 3px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.item_num{
	display: flex;
  align-items: center; 
}

.modal-content h3, .modal-content h4 {
    margin: 10px 0;
}
.item_size h4 {
  margin-right: 25px;
}
.qual{
  width: 10%;
  font-size: 25px;
}
.buy_item{

}
.item_move{
  display: flex;
  justify-content: space-between;
  align-items: center; /* 新增此行來實現垂直居中 */
  margin-top: 10px;
  margin-bottom: 10px;
}

/* car */
.cart {
  position: fixed;
  cursor: pointer;
  right: 70px;
  top: 10px;
  z-index: 200;
  display: flex;
}
.cart p {
  color: white;
}
.cart-count {
  position: absolute;
  top: -10px; /* 調整以適合您的布局 */
  left: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8em;
}
.cart-image{
	width: 40px;
	height: auto;
}
.cart-item {
    display: flex; /* 启用 Flexbox */
    align-items: center; /* 垂直居中 */
    margin-bottom: 10px; /* 每个列表项之间的间隔 */
    justify-content: space-between;
}

.item-image {
    width: 80px; /* 图片宽度，可以根据需要调整 */
    height: 80px; /* 图片高度，可以根据需要调整 */
    margin-right: 15%; /* 图片和文本之间的间隔 */
    
    object-fit: cover; /* 确保图片不会变形 */
}

.item-description {
    flex: 1; /* 让描述占据剩余空间 */
}

/*  */
.filter_kind{
  display: flex;
  padding: 5px;
}
.filter_kind button{
  margin-right: 5px;
}
.text-with-ellipsis {
  height: 30%; /* 或者其它固定宽度 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.total{
 text-align: right;
 margin-bottom: 10px;
}
.total span{
  color: red;
  font-weight: 600;
}
.item_move span{
  color: red;
  font-weight: 600;
}
</style>


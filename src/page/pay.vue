<template>
    <Navbar  />
    <div class="checkout-container">
        <span class="title">結帳</span>
        
        <!-- 商品清单 -->
        <div class="checkout-section">
            <h3>您的商品</h3>
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
        </div>
        <div class="total">
            <p>總金額 <span>${{ totalAmount }}</span></p>
        </div>
        <!-- 支付信息 -->
        <div class="checkout-section">
            <h3>付款資料</h3>
            <form @submit.prevent="submitOrder">
                <!-- 支付方式 -->
                <div class="payment-method">
                    <label for="payment-method">選擇付款方式:</label>
                    <select id="payment-method" v-model="paymentMethod">
                        <option value="credit-card">信用卡</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">銀行轉帳</option>
                    </select>
                </div>

                <!-- 收货信息 -->
                <div class="shipping-info">
                    <h4>收貨訊息</h4>
                    <input type="text" v-model="shippingName" placeholder="姓名" required>
                    <input type="text" v-model="shippingAddress" placeholder="地址" required>
                    <input type="email" v-model="shippingEmail" placeholder="Email" required>
                </div>

                <!-- 提交按钮 -->
                <button type="submit">確認訂單</button>
            </form>
        </div>
    </div>
    <Ft></Ft>
</template>
<style scoped>
.title{
    font-size: 35px;
    font-weight: 700;
    margin-left: 40%;
}
.checkout-container {
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.checkout-section {
    margin-bottom: 20px;
}

.payment-method, .shipping-info {
    margin-bottom: 10px;
}

input[type="text"], input[type="email"], select {
    width: 100%;
    padding: 3px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: gray;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: black;
}

.cart-item {
    display: flex; /* 启用 Flexbox */
    align-items: center; /* 垂直居中 */
    margin-bottom: 10px; /* 每个列表项之间的间隔 */
    justify-content: space-between;
}

.item-image {
    width: 120px; /* 图片宽度，可以根据需要调整 */
    height: 120px; /* 图片高度，可以根据需要调整 */
    margin-right: 15%; /* 图片和文本之间的间隔 */
    object-fit: cover; /* 确保图片不会变形 */
}

.item-description {
    flex: 1; /* 让描述占据剩余空间 */
}
.total{
 text-align: center;
 margin-bottom: 10px;
}
.total span{
  color: red;
  font-size: 25px;
  font-weight: 600;
}
</style>
<script setup>
import Navbar from '../components/Navbar.vue';
import Ft from '../components/Footer.vue';
import { ref, computed } from 'vue';
import { useProductsStore } from '../stores/productsStore.js'; // 确保路径正确

const { cart, addToCart, clearCart } = useProductsStore();

const paymentMethod = ref('credit-card');
const shippingName = ref('');
const shippingAddress = ref('');
const shippingEmail = ref('');

const submitOrder = () => {
    // 处理订单提交逻辑
    console.log("订单已提交", {
        cart: cart.value, 
        paymentMethod: paymentMethod.value,
        shippingName: shippingName.value, 
        shippingAddress: shippingAddress.value, 
        shippingEmail: shippingEmail.value
    });

    // 清空购物车等后续操作
    clearCart(); // 假设你有一个清空购物车的方法
};
const totalAmount = computed(() => {
  return cart.reduce((acc, item) => acc + item.money * item.quantity, 0);
});

</script>


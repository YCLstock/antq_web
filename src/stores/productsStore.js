import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
  // 商品數據，使用 ref 包裝以確保響應式
  const products = ref([
    { 
      name: '平價T-shirt', 
      description: '便宜又好穿', 
      image: new URL('../assets/images/T.jpg', import.meta.url).href,money:'1800', 
      kind: '衣服'
    },
    { name: '美式復古', description: 'T-shirt',money:'1050', image: new URL('../assets/images/A.jpg', import.meta.url).href ,kind: '衣服'},
    { name: '新款T-shirt', description: '帥痞短T', money:'1200',image: new URL('../assets/images/S.jpg', import.meta.url).href ,kind: '衣服'},
    { name: '運動風T-shirt', description: '運動時尚兩相宜',money:'800', image: new URL('../assets/images/A.jpg', import.meta.url).href ,kind: '衣服'},
    { name: '重磅T-shirt', description: '經典永不過時', money:'1100',image: new URL('../assets/images/T.jpg', import.meta.url).href ,kind: '衣服'},
    { name: '日系T-shirt', description: '簡潔大方，日常必備',money:'900', image: new URL('../assets/images/S.jpg', import.meta.url).href ,kind: '衣服'},
    { name: '潮流長褲', description: '跟上時尚潮流', money:'1800',image: new URL('../assets/images/CC.jpg', import.meta.url).href ,kind: '褲子'},
    { name: '工裝長褲', description: '童心未泯，趣味滿滿', money:'2800',image: new URL('../assets/images/N.jpg', import.meta.url).href ,kind: '褲子'},
    { name: '山系長褲', description: '音樂與時尚的完美結合', money:'3800',image: new URL('../assets/images/P.jpg', import.meta.url).href ,kind: '褲子'},
    { name: 'outdoor', description: '水洗長褲', money:'1500',image: new URL('../assets/images/P.jpg', import.meta.url).href ,kind: '褲子'},
    { name: '紀念牛仔褲', description: '紀念特殊時刻的最佳選擇', money:'1800',image: new URL('../assets/images/N.jpg', import.meta.url).href ,kind: '褲子'},
    { name: '素面長褲', description: '科技與時尚的交融', money:'2000',image: new URL('../assets/images/CC.jpg', import.meta.url).href ,kind: '褲子'}
    // 其他初始商品...
  ]);

  // 新增商品的方法
  const addProduct = (newProduct) => {
    products.value.push(newProduct);
  };

  // 獲取所有商品的方法
  const getAllProducts = () => {
    return products.value;
  };


    //cart 中的內容
    const cart = ref([]);

    const addToCart = (product) => {
    cart.value.push(product);
    console.log(cart)
    };

    // 计算购物车中所有商品的总金额


  return { products, addProduct, getAllProducts, cart, addToCart };
});

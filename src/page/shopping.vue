<template>

	<!-- Navigation Bar -->
	<Navbar></Navbar>
	
	<div class="container">

	
	
	<!-- Hero Image -->
	  <section class="hero">
      <div class="info-text">
        <!-- <h2>Our Fashion Store</h2> -->
        <p>Discover<br> the<br> Fashion Journey</p>
      </div>
      <button class="buy-now-button">立即選購</button>
		  <img src="../assets/images/hero.jpg" alt="Fashion Hero Image" >
      <div class="overlay"></div>
	  </section>

	<!-- Company Information Section -->
	<!-- <section class="company-info">
      <img src="../assets/images/clothe.png" alt="Company">

    </section> -->
  
	  <!-- Carousel for Featured Products -->
	  <section class="carousel">
		<swiper :options="swiperOptions" :autoplay="{ delay: 2500, disableOnInteraction: false }">
			<swiper-slide v-for="(item, index) in carouselItems" :key="index">
			<div class="slide-content">
				<img :src="item.imgSrc" :alt="item.altText" class="slide-image">
				<div class="slide-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
				</div>
			</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		</section>

	<!-- Embedded Video Section -->
    <!-- <section class="video-section">
      <video width="640" height="360" autoplay muted loop >
        <source src="../assets/images/figure.mp4" type="video/mp4">
        您的瀏覽器不支持 HTML5 video 標籤。
      </video>
    </section> -->

    <!-- Store Information -->
    <section class="store-info">
      <h2>Our Stores</h2>
      <swiper :modules="modules" class="store-box">
        <swiper-slide v-for="(store, index) in stores" :key="index" class="store-slide">
          <img :src="store.image" alt="Store Image" class="store-image">
          <div class="store-details">
            <h3>{{ store.name }}</h3>
            <p>{{ store.address }}</p>
            <p>{{ store.phone }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </section>

	<!-- footer -->
    <Ft></Ft>
	
	</div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import Navbar from '../components/Navbar.vue';
import Ft from '../components/Footer.vue';

		// 使用 ref 定義響應式數據

		
		const stores = ref([
		{
				name: 'Urban Trends',
				image: new URL('../assets/images/store.jpg', import.meta.url).href,
				address: '456 Fashion Blvd, Trendy City, 12345',
				phone: '987-654-3210'
			},
			{
				name: 'Classic Elegance',
				image: new URL('../assets/images/store.jpg', import.meta.url).href,
				address: '789 Vintage Ave, Oldtown, 67890',
				phone: '654-321-0987'
			},
			{
				name: 'Modern Chic',
				image: new URL('../assets/images/store.jpg', import.meta.url).href,
				address: '101 Style St, Metro City, 23456',
				phone: '321-098-7654'
			},
			{
				name: 'Boho Boutique',
				image: new URL('../assets/images/store.jpg', import.meta.url).href,
				address: '202 Bohemian Rd, Artville, 34567',
				phone: '567-890-1234'
			},
			{
				name: 'High Fashion Hub',
				image: new URL('../assets/images/store.jpg', import.meta.url).href,
				address: '303 Couture Way, Glamour Town, 45678',
				phone: '890-123-4567'
			}
		]);


		const carouselItems = ref([
		// 省略具體的輪播項目，請依照原本的數據填入
		{
				imgSrc: new URL('../assets/images/T.jpg', import.meta.url).href,
				altText: '夏日時尚特賣',
				title: '夏日時尚特賣',
				description: '炎炎夏日，清爽穿搭享75折優惠！'
			},
			{
				imgSrc: new URL('../assets/images/A.jpg', import.meta.url).href,
				altText: '冬季新品發布',
				title: '冬季新品發布',
				description: '全新冬季系列上市，搶先購買享9折！'
			},
			{
				imgSrc: new URL('../assets/images/N.jpg', import.meta.url).href,
				altText: '限時快閃折扣',
				title: '限時快閃折扣',
				description: '本週末限時快閃，精選商品低至5折！'
			},
			{
				imgSrc: new URL('../assets/images/CC.jpg', import.meta.url).href,
				altText: '秋季流行前瞻',
				title: '秋季流行前瞻',
				description: '秋季流行新款，提前預訂享特惠價！'
			},
			{
				imgSrc: new URL('../assets/images/S.jpg', import.meta.url).href,
				altText: '節日特別優惠',
				title: '節日特別優惠',
				description: '慶祝佳節，全場商品第二件半價！'
			},
		]);

		// 方法
		const onSlideChange = (swiper) => {
		console.log('slide change', swiper.activeIndex);
		};
		const onSwiper = (swiper) => {
		console.log('swiper instance:', swiper);
		};
		const addToCart = (product) => {
		// Implement add to cart functionality
		};

		// 若有需要的話，可以使用 onMounted 來處理掛載後的邏輯
		onMounted(() => {
		// 掛載後需要執行的代碼
		});
</script>

  
  <style>
  /* 添加您的 CSS 樣式 */

/* 設定slide-content的樣式 */
.slide-content {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 auto;
  width: fit-content;
}

/* 設定slide-image的樣式 */
.slide-image {
  width: 100%; /* 讓圖片不超過容器寬度 */
  height: auto; /* 維持圖片原始比例 */
  margin-bottom: 15px; /* 圖片與文字之間的間隔 */
}
.slide-text{
  margin-left: 30px;
}
.slide-text h3{
  font-weight: 600;
  font-size: 25px;
}

  /* Swiper 樣式自定義 */
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: gray;
  }
  
  /* 更多樣式... */

  .container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #f8f8f8;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.cart {
  font-size: 1rem;
  color: #333;
}

.hero {
  width: 100vw;  /* 設定圖片寬度為視窗的100% */
  height: 100vh;
  object-fit: contain; /* 設定圖片以覆蓋的方式填充容器，可能會被裁切 */
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: auto;
}

.hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  /* 設定圖片寬度為視窗的100% */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15); /* 這裡的黑色覆蓋層是半透明的 */
  /* z-index: 10; */
}

.info-text {
  max-width: 60%;
  font-weight: 700;
  font-size: calc(10vh - 10px);
  top: 25vh; /* 相對於容器上邊界的距離 */
  left: 12vw; /* 相對於容器左邊界的距離 */
  position: absolute;
  color: white; 
  /* text-shadow: 
    -1px -1px 0 #c2c0c0,  
     1px -1px 0 #c2c0c0,
    -1px  1px 0 #c2c0c0,
     1px  1px 0 #c2c0c0;  */
  z-index: 1;
}

.buy-now-button {
            background-color: #ffffff; /* 按钮背景颜色 */
            color: rgb(15, 15, 15); /* 文字颜色 */
            padding: 15px 32px; /* 按钮内边距 */
            text-align: center; /* 文字居中 */
            text-decoration: none; /* 移除下划线 */
            display: inline-block; /* 使元素的宽高生效 */
            font-size: calc(5vh - 10px); /* 文字大小 */
            font-weight: 500;
            margin: 4px 2px; /* 外边距 */
            cursor: pointer; /* 鼠标样式 */
            border: none; /* 移除边框 */
            border-radius: 5px; /* 边框圆角 */
            transition-duration: 0.4s; /* 过渡效果时间 */
            top: 70vh; /* 相對於容器上邊界的距離 */
            left: 12vw; /* 相對於容器左邊界的距離 */
            position: absolute;
            z-index: 1;
        }

        .buy-now-button:hover {
            background-color: #7b7d7b; /* 鼠标悬停时的背景颜色 */
            color: white;
        }

/* 首途結束 */

.carousel {
  padding: 20px 0;
  /* background-color: #F8F8F8; */
  background-color: #f8f8f8;
}

.company-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
}

.company-info img {
	
  max-width: 50%;
  height: auto;
  border-radius: 8px;
}



/* 商店資訊 */
.store-info {
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
}
.store-info h2{
	text-align: center;
	font-size: 25px; /* 縮小段落文字大小，根據需要調整 */
	font-weight: 600;
}
/* 添加或修改你的 CSS 檔案 */
.store-box {
  display: flex; /* 啟用 flexbox 布局 */
  flex-direction: row; /* 預設方向為 row，但明確指定以增強可讀性 */
  align-items: center; /* 如果需要，可調整對齊方式 */
  padding-bottom: 20px; /* 根據需要調整間距 */
  justify-content: center; /* 水平居中 */
  padding: 5px;
  width: 100%;
}

.store-image {
  width: 40vw; /* 根據需要調整圖片大小 */
  height: auto; /* 保持圖片的原始寬高比 */
  margin-right: 10px; /* 在圖片和文字描述之間添加一些間距 */
  object-fit: cover; /* 超出的部分會被裁切掉，保持圖片的寬高比 */
  border-radius: 8px;
}

.store-details {
  width: 30vw;
  padding: 10px; /* 添加一些內邊距 */
}

/* 針對 swiper-slide 元素也設定 flex 布局，以確保內容正確排列 */
.store-slide {
  justify-content: center; /* 水平居中 */
  display: flex;
  flex-direction: row; /* 確保內容是水平排列的 */
  height: 35vh;
}

.store-details h3 {
  font-size: 1.4em; /* 或根據你的需求設定具體的大小 */
  margin-bottom: 3px;
  font-weight: 600;
}

.store-details p {
  font-size: 1.1em; /* 縮小段落文字大小，根據需要調整 */
  margin-top: 2px; /* 根據需要調整間距 */
  margin-bottom: 2px; /* 根據需要調整間距 */
}

/*  */
.contact-info {
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

footer p, footer ul li {
  margin: 10px 0;
}
.video-section {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: fit-content; /* 可选：使视频区域高度等于视口高度 */
}
  </style>
  
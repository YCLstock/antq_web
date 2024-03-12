<template>

	<!-- Navigation Bar -->
	<Navbar></Navbar>
	
	<div class="container">

	
	
	<!-- Hero Image -->
	  <section class="hero">
		<img src="../assets/images/hero.jpg" alt="Fashion Hero Image">
	  </section>

	<!-- Company Information Section -->
	<section class="company-info">
      <img src="../assets/images/clothe.png" alt="Company">
      <div class="info-text">
        <!-- <h2>Our Fashion Store</h2> -->
        <p>Discover the Fashion Journey</p>
      </div>
    </section>
  
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
    <section class="video-section">
      <video width="640" height="360" autoplay muted loop >
        <source src="../assets/images/figure.mp4" type="video/mp4">
        您的瀏覽器不支持 HTML5 video 標籤。
      </video>
    </section>

    <!-- Store Information -->
    <section class="store-info">
      <h2>Our Stores</h2>
      <swiper :navigation="true" :modules="modules" class="store-box">
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
  flex-direction: column;
  align-items: center;
  text-align: center; /* 確保文字居中 */
}

/* 設定slide-image的樣式 */
.slide-image {
  max-width: 100%; /* 讓圖片不超過容器寬度 */
  height: auto; /* 維持圖片原始比例 */
  margin-bottom: 15px; /* 圖片與文字之間的間隔 */
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  width: 100%;
  margin: 20px 0;
}

.hero img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel {
  margin: 20px 0;
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

.info-text {
  max-width: 60%;
  margin-left: 20px;
  font-weight: 900;
  font-size: 23px;
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
  margin-bottom: 20px; /* 根據需要調整間距 */
  padding: 5px;
  width: 100%;
}

.store-image {
  width: 50%; /* 根據需要調整圖片大小 */
  height: auto; /* 保持圖片的原始寬高比 */
  margin-right: 10px; /* 在圖片和文字描述之間添加一些間距 */
  object-fit: cover; /* 超出的部分會被裁切掉，保持圖片的寬高比 */
  border-radius: 8px;
}

.store-details {
  flex: 1; /* 讓文字描述部分占據剩餘的空間 */
  padding: 10px; /* 添加一些內邊距 */
}

/* 針對 swiper-slide 元素也設定 flex 布局，以確保內容正確排列 */
.store-slide {
  display: flex;
  flex-direction: row; /* 確保內容是水平排列的 */
  height: 160px;
}

.store-details h3 {
  font-size: 1.1em; /* 或根據你的需求設定具體的大小 */
  margin-bottom: 3px;
  font-weight: 600;
}

.store-details p {
  font-size: 0.8em; /* 縮小段落文字大小，根據需要調整 */
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
  
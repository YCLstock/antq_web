<template>
    <div class="bg-black p-4 fixed w-full top-0 z-10 h-16" >
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="text-white font-bold text-xl">BEE DEV</a>

            <!-- Menu Items -->
            <div class="hidden md:flex space-x-4">
              

				<router-link to="/shopping" class="text-white mr-8">Items</router-link>
    			<a href="#" class="text-white mr-8">stores</a> <!-- 增加右邊距 -->
    			<a href="#" class="text-white">Contact</a>
				

            </div>

            <!-- Mobile Menu Button -->
			<!-- <div class="md:hidden">
				<button @click="toggleMobileMenu" class="text-white focus:outline-none">
					SVG for hamburger menu icon
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
			</div> -->
			<div class="md:hidden hs-dropdown relative inline-flex">
                    <button @click="toggleDropdown" type="button" class="text-white hs-dropdown-toggle inline-flex justify-center items-center gap-x-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
                    </button>

                    <div :class="{'opacity-100': isDropdownOpen, 'opacity-0': !isDropdownOpen, 'hidden': !isDropdownOpen}" class="hs-dropdown-menu transition-[opacity,margin] duration mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
                        <router-link to="/shopping" class="dropdown-item">Items</router-link>
                        <router-link to="/shopping" class="dropdown-item">Store</router-link>
                        <router-link to="/shopping" class="dropdown-item">Contact</router-link>
                    </div>
            </div>

        </div>
    </div>
    <div class="white_zone">

    </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      isDropdownOpen: false,
      isSubMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
    },
  },
};
</script>

<style>
/* ...您的CSS樣式... */

.dropdown-item {
  display: flex;
  descent-override: center;
  border-bottom: 0.5px solid gray;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 8px;
  padding-left: 10px;
  /* gap-x-3.5;
  py-2;
  px-3;
  rounded-md;
  text-sm;
  text-gray-800;
  hover:bg-gray-100;
  focus:ring-2;
  focus:ring-blue-500;
  dark:text-gray-400;
  dark:hover:bg-gray-700;
  dark:hover:text-gray-300; */
}

/* 漢堡選單 */
.mobile-menu {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

.mobile-menu.hidden {
    transform: translateX(0);
}

.close-btn {

    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: rgb(254, 246, 246);
}
.white_zone{
  height: 75px;
}
</style>

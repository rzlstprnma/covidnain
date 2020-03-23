<template>
<nav class="container mx-auto nav bg-blue-900 text-white flex flex-wrap items-center justify-between px-4">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-white-darkest">
    <span class="font-semibold text-xl tracking-tight">Covid-19</span>
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-white flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <router-link to="/" class="block md:inline-block px-4 py-3 no-underline text-white hover:text-white font-bold">Home</router-link>
    </li>
    
    <li class="border-t md:border-none">
      <router-link to="/about" class="block md:inline-block px-4 py-3 no-underline text-white hover:text-white">About</router-link>
    </li>
    
  </ul>
</nav>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style scoped>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: rgb(255, 255, 255);
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}

</style>

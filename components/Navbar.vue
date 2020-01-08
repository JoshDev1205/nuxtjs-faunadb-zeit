<template>
  <nav
    class="flex text-center px-4 py-2 bg-blue-400 shadow-lg justify-between items-center"
  >
    <div>
      <nuxt-link to="/" class="text-2xl font-bold text-gray-300">
        Josh's Bookstore
      </nuxt-link>
    </div>
    <div>
      <nuxt-link class="px-4 text-gray-300 text-xl" to="/author"
        >Author</nuxt-link
      >
      <nuxt-link class="px-4 text-gray-300 text-xl" to="/book">Book</nuxt-link>
    </div>
  </nav>
</template>

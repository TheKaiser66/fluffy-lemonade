<script>
    export let name, img, price = ""
</script>
<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-5 py-5">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      {name}
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      <slot></slot>
    </p>
  </div>

  <img
    class="w-auto h-auto "
    src="{img}"
    alt=""
  />

  <div class="flex items-center justify-between px-5 py-5 bg-gray-900">
    <h1 class="text-lg font-bold text-white">{price}</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>
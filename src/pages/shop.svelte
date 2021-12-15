<script>
  import Heading from "../components/text/Heading.svelte";
</script>

<Heading>Shop</Heading>
<p>
  <b
    >Hier finden sie die verfügbaren Produkte der ALLC. Beachten sie jedoch,
    dass unser Sortiment nicht vollständig auf dieser Seite angeboten wird, wir
    liefern nur kleine Flaschen unter 0.5l.
  </b>
</p>
<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-4 py-2">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      3 x 250ml-Bio-Lamanade
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Eine erfrischende Wendung im Sortiment, perfekt für den Modernen Hipster.
    </p>
  </div>

  <img
    class="object-cover w-full h-48 mt-2"
    src="/pictures/250ml.jpeg"
    alt="250ml"
  />

  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-lg font-bold text-white">14.99€</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>
<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-4 py-2">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      3 x 250ml-Standard-Lamanade
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Eine erfrischende Wendung im Sortiment, perfekt für den Modernen Hipster.
    </p>
  </div>

  <img
    class="object-cover w-full h-48 mt-2"
    src="/pictures/250ml.jpeg"
    alt="250ml"
  />

  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-lg font-bold text-white">9.99€</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>
<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-4 py-2">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      3 x 250ml-Bio-Limonade
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Eine erfrischende Wendung im Sortiment, perfekt für den Modernen Hipster.
    </p>
  </div>

  <img
    class="object-cover w-full h-48 mt-2"
    src="/pictures/250ml.jpeg"
    alt="250ml"
  />

  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-lg font-bold text-white">12.99€</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>
<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-4 py-2">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      3 x 250ml-Standard-Limonade
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Ein Klassiker, alle kennen Ihn, alle Lieben Ihn.
    </p>
  </div>

  <img
    class="object-cover w-full h-48 mt-2"
    src="/pictures/250ml.jpeg"
    alt="250ml"
  />

  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-lg font-bold text-white">9.99€</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>

<div
  class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
>
  <div class="px-4 py-2">
    <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
      Bitter Lemon
    </h1>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Neu in unserem Sortiment: Die Königin aller erfrischungs Getränke, die
      Bitter Lemon, ein Getränk ohne gleichen!
    </p>
  </div>

  <img
    class="object-cover w-full h-48 mt-2"
    src="/pictures/bitter_lemon.jpeg"
    alt="bitter_lemon"
  />

  <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 class="text-lg font-bold text-white">14.99€</h1>
    <button
      onclick="window.location.href='/outofstock'"
      class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >Add to cart</button
    >
  </div>
</div>

<style>
  img {
    max-height: 50vh;
    width: auto;
  }
</style>

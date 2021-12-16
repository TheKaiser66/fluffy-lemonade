<!-- svelte-ignore a11y-missing-content -->
<script>
  import { url } from "@roxi/routify";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<!-- routify:options preload="proximity" -->

  <div class="w-full place-items-center grid ">
    <Navbar />
    <main class="min-h-screen p-3 max-w-36 m-auto">
      <slot />
    </main>
    <Footer />
  </div>




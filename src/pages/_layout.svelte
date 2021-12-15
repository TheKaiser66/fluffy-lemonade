<!-- svelte-ignore a11y-missing-content -->
<script>
  import { url } from "@roxi/routify";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<!-- routify:options preload="proximity" -->

<div class="wrapper">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  div.wrapper {
    max-width: 100%;
    overflow: hidden;
  }
  main {
    min-height: 100vh;
    padding: 0 8.5rem;
  }
</style>

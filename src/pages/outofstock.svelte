<script>
  import { url } from "@roxi/routify";
  import Heading from "../components/text/Heading.svelte";
  import Paragraph from "../components/text/Paragraph.svelte"
</script>
<div class="flex flex-col hustify-between min-h-max font-size:5rem">
  <div class="text-center font-bold text-5xl"><a href="/shop">OUT OF STOCK</a></div>
  <div class="text-center">
    <div>
      <Paragraph>Entschuldiegen sie, aufgrund gegebener Umstände sind unsere Produkte
      ausverkauft!<br />Wir werden in naher Zukunft mehr
      Lamanaden-Pulver-Mischung sowie fertig Lamanade vorrätig haben.</Paragraph><br />
      <a href="/shop"><b>Go back</b></a>
    </div>
  </div>
</div>

<style>
  .outofstock {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .huge {
    font-size: 5rem;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
  }
</style>

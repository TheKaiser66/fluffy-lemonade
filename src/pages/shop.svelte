<script>
  import Heading from "../components/text/Heading.svelte";
  import Card from "../components/shop/Card.svelte";
</script>

<Heading>Shop</Heading>
<p>
  <b
    >Hier finden sie die verfügbaren Produkte der ALLC. Beachten sie jedoch,
    dass unser Sortiment nicht vollständig auf dieser Seite angeboten wird, wir
    liefern nur kleine Flaschen unter 0.5l.
  </b>
</p>
<section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-3">
  <Card name="3 x 250ml-Bio-Lamanade" price="14.99€" img="/pictures/250ml.jpeg">
    Eine erfrischende Wendung im Sortiment, perfekt für den modernen Hipster.
  </Card>
  <Card
    name="3 x 250ml-Standard-Lamanade"
    price="9.99€"
    img="/pictures/250ml.jpeg"
  >
    Unsere alt bekannte Spezialität.</Card
  >
  <Card name="3 x 250ml-Bio-Limonade" price="12.99€" img="/pictures/250ml.jpeg">
    Unsere neu und moderne limonade für den gemeinen Hipster.</Card
  >
  <Card
    name="3 x 250ml-Standard-Lamanade"
    price="9.99€"
    img="/pictures/250ml.jpeg"
  >
    Unsere alt bekannte Spezialität.</Card
  >
  <Card
    name="3 x 250ml-Standard-Limonade"
    price="9.99€"
    img="/pictures/250ml.jpeg"
  >
    Ein Klassiker, alle kennen Ihn, alle lieben Ihn.</Card
  >
  <Card name="Bitter Lemon" price="14.99€" img="/pictures/bitter_lemon.jpeg">
    Neu in unserem Sortiment: Die Königin aller erfrischungs Getränke, die
    Bitter Lemon, ein Getränk ohne gleichen!</Card
  >
</section>

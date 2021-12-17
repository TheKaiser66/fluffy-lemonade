<script>
    import Heading from "../components/text/Heading.svelte";
    import Card from "../components/shop/Card.svelte";
    import Paragraph from "../components/text/Paragraph.svelte"
  </script>
  
  <Heading>Shop</Heading>
  <p>
    <b
      >The shop is a lie.
      <br>
      scroll down
    </b>
  </p>
  <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-3">
    <Card name="Lama" price="999.99€" img="/pictures/lama.jpeg">
    </Card>
    <Card
      name="Lama"
      price="999.99"
      img="/pictures/lama.jpeg"
    ></Card
    >
    <Card name="Lama" price="999.99€" img="/pictures/lama.jpeg">
      </Card
    >
    <Card
      name="Lama"
      price="999.99"
      img="/pictures/lama.jpeg"
    >
      </Card
    >
    <Card
      name="Lama"
      price="999.99"
      img="/pictures/lama.jpeg"
    >
      </Card
    >
    <Card name="Lama" price="999.99" img="/pictures/lama.jpeg">
    </Card
    >
  </section>
  <br>
  <a href="/shop"> <Paragraph>Herzlichen glückwunsch, sie haben soeben eine Minute ihres Lebens verschwendet!</Paragraph></a>
  <div class="py-10 sm:max-w-xl sm:mx-auto">
    <a href="/impressum" class="font-display max-w-sm text-4xl font-bold leading-tight">
        <span class="link link-underline link-underline-black text-white"><center> Impressum</center></span>
    </a>
    </div>



<style>
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .8s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(255, 0, 0), rgb(255, 0, 0))
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>
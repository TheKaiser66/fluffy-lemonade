<script>
  import { metatags } from "@roxi/routify";
  import Heading from "../components/text/Heading.svelte";
  import Paragraph from "../components/text/Paragraph.svelte";
  metatags.title = "Absolutely Legit Lemonade Company";
  metatags.description = "Description coming soon...";
</script>

<Heading>Wilkommen auf der Seite der ALLC</Heading>
<Paragraph
  >Die ALLC steht für Qualität, Geschmack sowie einen annehmbaren Preis.</Paragraph
>
<Paragraph>
  Unsere fair-trade Limo- und Lamanaden sind die besten auf dem Markt, unsere
  Produkte gibt es in verschiednen größen, von 250ml bis zu 2l.
</Paragraph>
<Paragraph>
  Auf unserer Seite sthehen ihnen jedoch nur die 250 bis 500ml Varianten zur
  verfügung. Die drei größeren Varianten sind ausschließlich in großen Ketten
  zur verfügung
</Paragraph>
<br />
<Paragraph>beispielsweise:</Paragraph>
<a href="https://www.rewe.de"
  ><img alt="REWE" src="/pictures/REWE.jpeg" width="100px" /></a
>

<a href="https://www.edeka.de">
  <img alt="Edeka" src="/pictures/Edeka.jpeg" width="100px" /></a
>

<section
  class="bg-transparent dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center"
>
  <div
    class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
  >
    <div class="lg:w-1/2">
      <div
        class="bg-cover lg:rounded-lg lg:h-full"
        style="background-image:url('https://images.unsplash.com/photo-1574689685526-a9281777ee89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')"
      />
    </div>

    <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
        <span class="text-blue-600 dark:text-blue-400">Gewinn</span>spiel
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-400" />
      <h1>Nehmen sie teil und gewinnen sie</h1>
      <p>
        Wir bei der ALLC sind sehr glaubwürdig. Aus diesem Grund haben wir ein
        Gewinnspiel für Sie eingerichtet.<br />In diesem Gewinnspiel haben wir
        Ihnen eine Hand voll an Preisen ausgesucht:
      </p>
      <br />
      <ul class="list-disc list-inside pl-2">
        <li>Ein Fahrrad ohne Sattel</li>
        <li>Ein halbvolles Glas Limo- oder Lamanade</li>
        <li>Ein Lama</li>
        <li>Brokkoli</li>
        <li>
          Einen Hausbesuch des Weihnachtsmannes (der Osterhase kommt kostenlos
          dazu)
        </li>
        <li>2 Kakteen mit einem Panda</li>
      </ul>

      <div class="mt-8">
        <button
          onclick="window.location.href='/shop'"
          class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
          >Start Now</button
        >
      </div>
    </div>
  </div>
</section>

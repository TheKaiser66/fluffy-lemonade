<script>
    import Heading from "../components/text/Heading.svelte";
    import Paragraph from "../components/text/Paragraph.svelte"
    </script>
    


<!-- component -->

	<div class="py-10 sm:max-w-xl sm:mx-auto">
		<a href="/shopfake" class="font-display max-w-sm text-4xl font-bold leading-tight">
			<span class="link link-underline link-underline-black dark:text-white"> Hier finden Sie mehr über uns</span>
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


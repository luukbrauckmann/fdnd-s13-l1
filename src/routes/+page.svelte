<script>
  export let data

  const { page } = data
</script>

<img class="light" src="light.svg" alt="">

<div class="content">
	<article class="portret">
		<img src="{ page.portret.url }" alt="">

	</article>

	<article class="newspaper">
		<header>
			<h2>{ page.firstname }</h2>
		</header>


	</article>
</div>
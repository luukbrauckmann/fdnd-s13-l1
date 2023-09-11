<script>
  export let data

  const { page } = data
</script>

<svg class="light" width="211" height="400" viewBox="0 0 211 400" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="105.292" cy="313.678" r="22.8161" fill="#D9D9D9" fill-opacity="0.2" stroke="#999999" stroke-width="3"/>
	<path d="M94.1158 243.882L94.6338 243.433V242.748V1.5H115.95V242.748V243.433L116.468 243.882L206.56 321.904H4.02336L94.1158 243.882Z" fill="#666666" stroke="#999999" stroke-width="3"/>
	<path d="M17.7538 317.325L96.7812 248.024L50.4325 317.325H17.7538Z" fill="#D9D9D9"/>
	</svg>


<div class="content">
	<article class="portret">
		<img src="{ page.portret.url }" alt="{ page.portret.alt }">

	</article>

	<article class="newspaper">
		<header>
			<h2>{ page.firstname }</h2>
		</header>


	</article>
</div>
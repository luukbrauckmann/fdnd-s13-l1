<script>
  import * as prismic from '@prismicio/client'
  import Light from '$lib/components/Light.svelte'

  export let data

  const { page } = data
</script>

<Light />

<div class="content">
  <article class="portret">
    <img src="{page.github.url}.png" alt="" />
  </article>

  <article class="newspaper">
    {@html prismic.asHTML(page.paper)}
  </article>
</div>

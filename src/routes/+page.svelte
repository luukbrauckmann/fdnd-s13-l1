<script>
  import * as prismic from '@prismicio/client'
  import { PrismicImage } from '@prismicio/svelte'
  import Light from '$lib/components/Light.svelte'

  export let data

  const { page } = data
</script>

<Light />

<div class="content">
  <article class="newspaper">
    <h1>{@html prismic.asHTML(page.title)}</h1>
    <div class="introduction">
      {@html prismic.asHTML(page.introduction)}

      <PrismicImage field={page.image} />
    </div>
    <div>{@html prismic.asHTML(page.story)}</div>
  </article>
</div>

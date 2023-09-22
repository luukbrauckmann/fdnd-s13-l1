<script>
  import * as prismic from '@prismicio/client'

  export let data
  const { page } = data
</script>

<article class="newspaper">
  <h1>{@html prismic.asHTML(page.title)}</h1>
  <div class="introduction">
    {@html prismic.asHTML(page.introduction)}

    <img src="{ page.github.url }.png" alt="Luuk Brauckmann">
  </div>
  <div>{@html prismic.asHTML(page.story)}</div>
</article>

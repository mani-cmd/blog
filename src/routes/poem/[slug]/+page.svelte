<script>
  export let data;
</script>

<article>
  <h1>{data.poem.title}</h1>
  <p><em>{data.poem.date}</em></p>

  <!-- Render the Markdown content -->
  <svelte:component this={data.Content} />
</article>

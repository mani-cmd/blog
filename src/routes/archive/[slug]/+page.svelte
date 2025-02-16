<script>
  export let data;
</script>



<!-- <script>
  export let data;
</script> -->

<article>
  <h1>{data.post.title}</h1>
  <p><em>{data.post.date}</em></p>
  
  <!-- Render Markdown content as a Svelte component -->
  <svelte:component this={data.Content} />
</article>



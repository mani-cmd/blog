<script>
  export let data;
</script>

<h1>Poem Collection</h1>
<ul>
  {#each data.poems as poem}
    <li>
      <a href={`/poem/${poem.slug}`}>
        <h2>{poem.title}</h2>
        <p>{poem.description}</p>
        <small>{poem.date}</small>
      </a>
    </li>
  {/each}
</ul>

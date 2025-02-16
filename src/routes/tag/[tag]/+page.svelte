<script>
  export let data;
</script>

<h1>Tag: {data.tag}</h1>

{#if data.posts.length > 0}
  <ul>
    {#each data.posts as post}
      <li>
        <a href={`/archive/${post.slug}`}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <small>{post.date}</small>
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts found with this tag.</p>
{/if}

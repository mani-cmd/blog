<script>
  export let data;
</script>

<h1>Blog Posts</h1>
<ul>
  {#each data.posts as post}
    <li>
      <a href={`/archive/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <small>{post.date}</small>
      </a>
    </li>
  {/each}
</ul>
 
<script>
  export let data;
</script>
<h1>Blog main page</h1>

<h2>Main block</h2>

<!-- Featured Post -->
{#if data.featuredPost}
  <section class="featured">
    <h4>Featured Post</h4>
    <article>
      <h6>{data.featuredPost.title}</h6>
      <p>{data.featuredPost.description}</p>
      <small>{data.featuredPost.date}</small>
      <br />
      <a href={`/archive/${data.featuredPost.slug}`}>Read More →</a>
    </article>
  </section>
{/if}


<!-- Recent Archives -->
<section>
  <h3>Recent Archives</h3>
  <ul>
    {#each data.recentPosts as post}
      <li>
        <a href={`/archive/${post.slug}`}>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <small>{post.date}</small>
        </a>
      </li>
    {/each}
  </ul>
  <a href="/archive">View all archives →</a>
</section>

<!-- Recent Poems -->
<section>
  <h3>Poems</h3>
  <ul>
    {#each data.recentPoems as poem}
      <li>
        <a href={`/poem/${poem.slug}`}>
          <h4>{poem.title}</h4>
          <small>{poem.date}</small>
        </a>
      </li>
    {/each}
  </ul>
  <a href="/poem/">View all poems →</a>
</section>


<!-- Tags and Categories Section -->
<section>
<!-- Categories Section -->
{#if data.categories.length > 0}
  <section>
    <h3>Categories</h3>
    <ul>
      {#each data.categories as category}
        <li>
          <a href={`/category/${category}`}>{category}</a>
        </li>
      {/each}
    </ul>
  </section>
{/if}


</section>

<style>
  .tag {
    background-color: #e2e8f0;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 5px;
    font-size: 14px;
  }
  .tag:hover {
    background-color: #cbd5e1;
  }
</style>

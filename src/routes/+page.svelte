<script>
  export let data;
</script>
<h1>Blog main page</h1>

<h2>Main block</h2>


<h1>Welcome to My Blog & Poetry Site</h1>
<!-- Featured Post -->
{#if data.featuredPost}
  <section class="featured">
    <h2>Featured Post</h2>
    <article>
      <h3>{data.featuredPost.title}</h3>
      <p>{data.featuredPost.description}</p>
      <small>{data.featuredPost.date}</small>
      <br />
      <a href={`/archive/${data.featuredPost.slug}`}>Read More →</a>
    </article>
  </section>
{/if}


<!-- Recent Archives -->
<section>
  <h2>Recent Archives</h2>
  <ul>
    {#each data.recentPosts as post}
      <li>
        <a href={`/archive/${post.slug}`}>
          <h3>{post.title}</h3>
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
  <h2>Recent Poems</h2>
  <ul>
    {#each data.recentPoems as poem}
      <li>
        <a href={`/poem/${poem.slug}`}>
          <h3>{poem.title}</h3>
          <small>{poem.date}</small>
        </a>
      </li>
    {/each}
  </ul>
  <a href="/poem">View all poems →</a>
</section>


<!-- Tags and Categories Section -->
<section>
<!-- Categories Section -->
{#if data.categories.length > 0}
  <section>
    <h2>Categories</h2>
    <ul>
      {#each data.categories as category}
        <li>
          <a href={`/category/${category}`}>{category}</a>
        </li>
      {/each}
    </ul>
  </section>
{/if}


<!-- Tags Section -->
{#if data.tags.length > 0}
  <section>
    <h2>Tags</h2>
    <ul>
      {#each data.tags as tag}
        <li>
          <a href={`/tag/${tag}`}>#{tag}</a>
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

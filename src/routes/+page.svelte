<script>
  export let data;
  function dateToLetters(dateStr) {
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day); // Months are 0-based in JS
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Example Usage
console.log(dateToLetters("18/02/2025")); // Output: "February 18, 2025"
console.log(dateToLetters("05/12/2023")); // Output: "December 5, 2023"


  // Convert date into
</script>
<h3 id="about">About</h3>
<p class='about'>
  Hey, I’m Manikandan, an IT major with a deep passion for artificial intelligence. Since even coding calls for a bit of creativity, this blog is where I share my projects, vent about tech, and occasionally drop a poem or two.
Expect a mix of technical explorations, debugging struggles, and the occasional philosophical take on AI. Whether you're a fellow coder, a tech enthusiast, or just here for the poetry, you might find something intriguing—or at least entertaining.
I post when inspiration strikes—no schedules, no pressure. Just thoughts, code, and verses as they come.
</p>
<!-- Featured Post
{#if data.featuredPost}
  <section class="featured">
    <h3>Featured Post</h3>
    <article>
      <h6>{data.featuredPost.title}</h6>
      <p>{data.featuredPost.description}</p>
      <small>{data.featuredPost.day}</small>
      <br />
      <a href={`/archive/${data.featuredPost.slug}`}>Read More →</a>
    </article>
  </section>
{/if} -->


<!-- Archives -->
<section>
  <h3>Archives</h3>
  <ul>
    {#each data.recentPosts as post}
      <li>
        <a href={`/archive/${post.slug}`}>
          <h5>{post.title}</h5>
          <p>{post.description}</p>
          <small>{post.day}</small>
        </a>
      </li>
    {/each}
  </ul>
  <a class="more" href="/archive">more </a>
</section>

<!-- Poems -->
<section class="poem-sec">
  <h3>Poems</h3>
  <ul>
    {#each data.recentPoems as poem}
      <li>
        <a href={`/poem/${poem.slug}`}>
          <h5>{poem.title}</h5>
          <i>{poem.day}</i>
        </a>
      </li>
    {/each}
  </ul>
  <a class="more" href="/poem">more</a>
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
 .about{
  font-size: 20px;
  font-weight: 400;
 }
  a > small{
    font-size: var(--font-body);
    font-weight: 500;
    font-style: italic;
  }
  a > p{
    font-size: var(--font-h6);
    font-weight: 300;
  }

  ul li{
    margin-bottom: 2vh;
    border-bottom: 1.5px solid var(--text-color);
  }

  a.more{
    display: block;
    font-size: var(--font-small);
    text-decoration: underline;
    text-align: center;
    margin-block: 1vh;
  } 
  .poem-sec ul li{
    list-style: disc;
    border: none;
    margin-block: 0;
    margin-bottom: 0;

  }
  .poem-sec ul li a,  .poem-sec ul li a h5{
    display: inline-block;
    font-size: var(--font-h6);
    font-weight: 400;
  }
  h3{
    margin-block: 60px 0;
    display: inline-block;
    text-decoration: underline 2px;
  }

</style>

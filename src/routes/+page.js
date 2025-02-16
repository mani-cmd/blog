export async function load() {
  // Fetch all blog posts
  const postModules = import.meta.glob('../archive/posts/*.svx');
  const posts = await Promise.all(
    Object.entries(postModules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        ...metadata,
        slug: path.split('/').pop().replace('.svx', ''), // Extract filename as slug
      };
    })
  );

  // Fetch all poems
  const poemModules = import.meta.glob('../archive/poems/*.svx');
  const poems = await Promise.all(
    Object.entries(poemModules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        ...metadata,
        slug: path.split('/').pop().replace('.svx', ''), // Extract filename as slug
      };
    })
  );

  // Sort by date (assuming metadata contains a "date" field in YYYY-MM-DD format)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  poems.sort((a, b) => new Date(b.date) - new Date(a.date));


  const featuredPost = posts.find((post) => post.featured) || null;
  const categories = [...new Set(posts.flatMap((p) => p.categories || []))];
  const tags = [...new Set(posts.flatMap((p) => p.tags || []))];

  return {
    featuredPost,
    recentPosts: posts.slice(0, 3),
    recentPoems: poems.slice(0, 5),
    categories,
    tags,
  };
}

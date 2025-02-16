export async function load({ params }) {
  const { category } = params;
  const postModules = import.meta.glob('../../../archive/posts/*.svx'); // Updated path

  const posts = await Promise.all(
    Object.entries(postModules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        ...metadata,
        slug: path.split('/').pop().replace('.svx', ''), // Extract slug
      };
    })
  );

  // Filter posts that match the category
  const categoryPosts = posts.filter((post) => post.categories?.includes(category));

  if (categoryPosts.length === 0) {
    return { status: 404, error: new Error("Category not found") };
  }

  return { category, posts: categoryPosts };
}

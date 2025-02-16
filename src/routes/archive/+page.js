export async function load() {
  const modules = import.meta.glob('../../archive/posts/*.svx');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        ...metadata,
        slug: path.split('/').pop().replace('.svx', ''), // Extract filename as slug
      };
    })
  );

  return { posts };
}

export async function load({ params }) {
  try {
    const post = await import(`../../../archive/posts/${params.slug}.svx`);
    return { post: post.metadata, Content: post.default };
  } catch (error) {
    return { status: 404, error: new Error("Post not found") };
  }
}
 
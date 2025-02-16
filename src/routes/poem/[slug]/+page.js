export async function load({ params }) {
  try {
    const poem = await import(`../../../archive/poems/${params.slug}.svx`);
    return { poem: poem.metadata, Content: poem.default };
  } catch (error) {
    return { status: 404, error: new Error("Poem not found") };
  }
}

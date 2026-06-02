import { getCollection } from 'astro:content';

const allTools = await getCollection('tool');
const tools = [...allTools].sort((a, b) => {
  const slugA = a.data.slug || a.slug;
  const slugB = b.data.slug || b.slug;
  return slugA.localeCompare(slugB);
});

export async function getStaticPaths() {
  const perPage = 9;
  const totalPages = Math.ceil(tools.length / perPage);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pageTools: tools.slice(i * perPage, (i + 1) * perPage),
      totalPages
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pageTools, totalPages } = props;
  
  return new Response(JSON.stringify({
    tools: pageTools.map(t => ({
      title: t.data.title || t.slug,
      description: t.data.description || '',
      cover: t.data.cover || '',
      urlSlug: t.data.slug || t.slug
    })),
    page: pageNum,
    totalPages,
    total: tools.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

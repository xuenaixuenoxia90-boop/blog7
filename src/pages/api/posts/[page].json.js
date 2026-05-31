import { getCollection } from 'astro:content';

const allPosts = await getCollection('blog');
const posts = [...allPosts].sort((a, b) => {
  const slugA = a.data.slug || a.slug;
  const slugB = b.data.slug || b.slug;
  return slugA.localeCompare(slugB);
});

export async function getStaticPaths() {
  const perPage = 9;
  const totalPages = Math.ceil(posts.length / perPage);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pagePosts: posts.slice(i * perPage, (i + 1) * perPage),
      totalPages
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pagePosts, totalPages } = props;
  
  return new Response(JSON.stringify({
    posts: pagePosts.map(p => ({
      title: p.data.title || p.slug,
      cover: p.data.cover || '',
      urlSlug: p.data.slug || p.slug
    })),
    page: pageNum,
    totalPages,
    total: posts.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

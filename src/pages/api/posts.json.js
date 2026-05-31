---
import { getCollection } from 'astro:content';

const allPosts = await getCollection('blog');
const posts = [...allPosts].sort((a, b) => {
  const slugA = a.data.slug || a.slug;
  const slugB = b.data.slug || b.slug;
  return slugA.localeCompare(slugB);
});

export async function GET({ url }) {
  const page = parseInt(url.searchParams.get('page') || '1');
  const perPage = 9;
  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, posts.length);
  const pagePosts = posts.slice(start, end);

  const data = pagePosts.map(post => ({
    title: post.data.title || post.slug,
    cover: post.data.cover || '',
    urlSlug: post.data.slug || post.slug
  }));

  return new Response(JSON.stringify({
    posts: data,
    page,
    totalPages: Math.ceil(posts.length / perPage),
    total: posts.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
---

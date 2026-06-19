import { getCollection } from 'astro:content';
import { readFileSync } from 'fs';
import path from 'path';

const allPosts = await getCollection('blog');
const posts = [...allPosts].sort((a, b) => {
  const slugA = a.data.slug || a.slug;
  const slugB = b.data.slug || b.slug;
  return slugA.localeCompare(slugB);
});

const picturesPath = path.join(process.cwd(), 'src', 'content', 'pictures', 'pictures.md');
const picturesContent = readFileSync(picturesPath, 'utf-8');
const imageRegex = /!\[img\]\(([^)]+)\)/g;
const pictureUrls = [];
let match;
while ((match = imageRegex.exec(picturesContent)) !== null) {
  pictureUrls.push(match[1]);
}

function getPictureByIndex(index) {
  if (pictureUrls.length === 0) {
    return `https://picsum.photos/300/200?${index}`;
  }
  return pictureUrls[index % pictureUrls.length];
}

export async function getStaticPaths() {
  const perPage = 9;
  const totalPages = Math.ceil(posts.length / perPage);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pagePosts: posts.slice(i * perPage, (i + 1) * perPage),
      startIndex: i * perPage,
      totalPages
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pagePosts, startIndex, totalPages } = props;
  
  return new Response(JSON.stringify({
    posts: pagePosts.map((p, localIndex) => ({
      title: p.data.title || p.slug,
      cover: p.data.cover || getPictureByIndex(startIndex + localIndex),
      urlSlug: p.data.slug || p.slug
    })),
    page: pageNum,
    totalPages,
    total: posts.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
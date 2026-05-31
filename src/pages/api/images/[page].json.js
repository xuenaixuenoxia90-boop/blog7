import { readFileSync } from 'fs';
import path from 'path';

// 读取pictures.md文件
const picturesPath = path.join(process.cwd(), 'src', 'content', 'pictures', 'pictures.md');
const picturesContent = readFileSync(picturesPath, 'utf-8');

// 提取图片链接
const imageRegex = /!\[img\]\(([^)]+)\)/g;
const allImages = [];
let match;
while ((match = imageRegex.exec(picturesContent)) !== null) {
  allImages.push(match[1]);
}

// 每页图片数量（与gallery页面一致）
const perPage = 80;
const totalPages = Math.ceil(allImages.length / perPage);

export async function getStaticPaths() {
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pageImages: allImages.slice(i * perPage, (i + 1) * perPage),
      totalPages,
      total: allImages.length
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pageImages, totalPages, total } = props;
  
  return new Response(JSON.stringify({
    images: pageImages,
    page: pageNum,
    totalPages,
    total
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
import videosData from '../../../content/video/videos.json';
import { readFileSync } from 'fs';
import path from 'path';

const swubPath = path.join(process.cwd(), 'src', 'content', 'pictures', 'SWUB.md');
const swubContent = readFileSync(swubPath, 'utf-8');
const imageRegex = /!\[img\]\(([^)]+)\)/g;
const pictureUrls = [];
let match;
while ((match = imageRegex.exec(swubContent)) !== null) {
  pictureUrls.push(match[1]);
}

function getPictureByIndex(index) {
  if (pictureUrls.length === 0) {
    return `https://picsum.photos/400/300?${index}`;
  }
  return pictureUrls[index % pictureUrls.length];
}

const videosPerPage = 9;
const totalPages = Math.ceil(videosData.length / videosPerPage);

export async function getStaticPaths() {
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pageVideos: videosData.slice(i * videosPerPage, (i + 1) * videosPerPage),
      startIndex: i * videosPerPage,
      totalPages
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pageVideos, startIndex, totalPages } = props;
  
  return new Response(JSON.stringify({
    videos: pageVideos.map((v, localIndex) => ({
      id: v.id,
      title: v.title,
      cover: getPictureByIndex(startIndex + localIndex)
    })),
    page: pageNum,
    totalPages,
    total: videosData.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

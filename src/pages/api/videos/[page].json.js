import videosData from '../../../content/video/videos.json';

const videosPerPage = 9;
const totalPages = Math.ceil(videosData.length / videosPerPage);

export async function getStaticPaths() {
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: {
      pageNum: i + 1,
      pageVideos: videosData.slice(i * videosPerPage, (i + 1) * videosPerPage),
      totalPages
    }
  }));
}

export async function GET({ params, props }) {
  const { pageNum, pageVideos, totalPages } = props;
  
  return new Response(JSON.stringify({
    videos: pageVideos.map(v => ({
      id: v.id,
      title: v.title,
      cover: v.cover || ''
    })),
    page: pageNum,
    totalPages,
    total: videosData.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

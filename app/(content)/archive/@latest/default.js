import NewsList from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
//in parallel routes, if page.js and default.js is having same data we can only have default.js
//sometimes you might want to restart your server after removing page.js and keeping only default.js
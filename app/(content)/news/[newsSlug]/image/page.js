//import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({params}){

    //const newsItem = DUMMY_NEWS.find((item) => item.slug === params.newsSlug);
    const newsItem = await getNewsItem(params.newsSlug);
    if(!newsItem) notFound();
    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
}
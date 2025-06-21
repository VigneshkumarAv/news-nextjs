import ModalBackDrop from "@/components/modal-backdrop/modal-backdrop";
import { getNewsItem } from "@/lib/news";
//import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const newsItem = await getNewsItem(params.newsSlug);
  //DUMMY_NEWS.find((item) => item.slug === params.newsSlug);
  if (!newsItem) notFound();

  return (
    <>
      <ModalBackDrop/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} style={{width:"100%"}} />
        </div>
      </dialog>
    </>
  );
}
// parllel route + intercepting route combination for showing modal overlay in same page
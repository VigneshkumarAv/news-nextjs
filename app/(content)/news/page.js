import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage(){
  /*// getting data from backend server folder 
    const response = await fetch('http://localhost:8080/news');
    // there might be a case where we dont need a separate backend server instead we can call the db from next js itself if that is needed as requirement
    if(!response.ok){
        throw new Error("Failed to fetch news");
    }
    const news = await response.json(); */

    const news = await getAllNews(); // when we are owning the database this is the best way to get the data
    return <>
    <header><h1>News Page</h1></header>
    <main>
    <NewsList news={news}/>
    </main>
    </>
}

//normal usual fetching api call react way
/* 
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
      async function fetchNews(){
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/news');
        if(!response.ok){
            setError('Failed to fetch news');
            setIsLoading(false);
        }
        const news = await response.json();
        setNews(news);
        setIsLoading(false);
      }
      fetchNews();
    }, []);
    
 */
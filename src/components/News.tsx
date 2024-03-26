import Newsimg from "../img/news.png";
import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  author: string;
  title: string;
  url: string;
  urlToImage: string;
}

function News() {
  const [news, setNews] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage: number = 16;

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=60e2ea0b8e554d3ba38affc13d96ad66&page=${currentPage}`
        );
        const data: Article[] = response.data.articles;
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    }
    getNews();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastArticle: number = currentPage * articlesPerPage;
  const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
  const currentArticles: Article[] = news.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <>
      <div className="w-full grid grid-cols-2 p-8 gap-5">
        {currentArticles.length > 0 &&
          currentArticles.map((article, index) => (
            <div key={index} className="p-3 flex flex-col gap-2">
              <a href={article.url}>
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={article.urlToImage}
                    alt="images"
                  />
                </div>
              </a>
              <h1 className="font-bold text-xl">{article.author}</h1>
              <h1 className="">{article.title}</h1>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={currentArticles.length < articlesPerPage}
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md"
        >
          Next Page
        </button>
      </div>
    </>
  );
}

export default News;

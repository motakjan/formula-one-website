import React from "react";
import { Title } from "../../UI/Title/Title";
import { getNews } from "../../../queries/queries";
import { useQuery } from "react-query";
import { Article } from "./Article/Article";

export const News = () => {
  const { data, status } = useQuery("news", getNews);
  return (
    <div className="news-section">
      <Title title="News" subtitle="NEWS FROM THE RACING WORLD" />
      <div className="articles">
        {data &&
          data.articles
            .slice(0, 9)
            .map((article, index) => (
              <Article key={index} articleData={article} />
            ))}
      </div>
    </div>
  );
};

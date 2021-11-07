import React from "react";
import { Title } from "../../UI/Title/Title";
import { getNews } from "../../../queries/queries";
import { useQuery } from "react-query";
import { Article } from "./Article/Article";
import { Spinner } from "../../UI/Spinner/Spinner";
import { ErrorMessage } from "../../UI/ErrorMessage/ErrorMessage";

export const News = ({ className }) => {
  const { data, status } = useQuery("news", getNews);
  console.log(status);
  return (
    <div className={`news-section ${className}`}>
      <Title title="News" subtitle="NEWS FROM THE RACING WORLD" />
      <div className="articles">
        {status === "success" &&
          data?.articles
            .slice(0, 9)
            .map((article, index) => (
              <Article key={index} articleData={article} />
            ))}
        {status === "loading" && <Spinner />}
        {status === "error" && (
          <ErrorMessage description="Error while loading news" />
        )}
      </div>
    </div>
  );
};

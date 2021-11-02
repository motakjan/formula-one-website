import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";

const { Meta } = Card;

export const Article = ({ articleData }) => {
  return (
    <Card
      className="article"
      cover={
        <div className="imgWrapper">
          <motion.img
            className="article-image"
            alt="example"
            src={articleData.urlToImage}
            whileHover={{ scale: 1.2, transition: { duration: 0.6 } }}
          />
        </div>
      }
    >
      <Meta title={articleData.title} />
      <p>{`${articleData.content.substr(0, 80)}...`}</p>
      <a href={articleData.url} target="_blank" rel="noopener noreferrer">
        Read Article
      </a>
    </Card>
  );
};

import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { Image } from "antd";

const { Meta } = Card;

export const Article = ({ articleData }) => {
  return (
    <Card
      className="article"
      cover={
        <div className="imgWrapper">
          <motion.div
            className="img"
            whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          >
            <Image
              className="article-image"
              alt="example"
              src={
                articleData.image?.contentUrl
                  ? articleData.image.contentUrl
                  : process.env.PUBLIC_URL + "/blackbg.jpg"
              }
            />
          </motion.div>
        </div>
      }
    >
      <Meta title={articleData.title} />
      <p>{`${articleData.description.substr(0, 80)}...`}</p>
      <a href={articleData.url} target="_blank" rel="noopener noreferrer">
        Read Article
      </a>
    </Card>
  );
};

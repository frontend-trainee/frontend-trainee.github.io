import React, { FC } from "react";
import { FtCardProps } from "../common/types";
import { HashRouter as Router, Link } from "react-router-dom";

import "./index.less";

const techColor: { [key in any]: string } = {
  vue2: "#4fc08d",
  vue3: "#4fc08d",
  react: "#61dafb",
  html: "#6abecd",
  css: "#3e54a3",
  js: "#e13784",
  ts: "#6abecd",
};

const FtCard: FC<FtCardProps> = ({
  name,
  link,
  pageLink,
  image,
  techs,
  authors = [],
}) => {
  return (
    <div className='card'>
      <Link to={link}>
        <div
          className='card-image'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </Link>
      <div className='card-content'>
        <a href={pageLink}>
          <div className='card-title'>{name}</div>
        </a>
        <div className='card-techs'>
          {techs.map((tech, tIndex) => {
            return (
              <span
                key={tIndex}
                style={{ color: techColor[tech.toLowerCase()] }}
              >
                {tech}
              </span>
            );
          })}
        </div>
        <div className='card-author'>
          {authors.map((author, aIndex) => {
            return (
              <a href={author.link} key={aIndex}>
                <span>@{author.username}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { FtCard };
export type { FtCardProps };

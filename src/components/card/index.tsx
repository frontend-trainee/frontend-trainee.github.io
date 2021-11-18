import React, { FC } from "react";
import { FtCardProps } from "../common/types";
import { HashRouter as Router, Link } from "react-router-dom";

import "./index.less";

const techColor: { [key in any]: string } = {
  vue: "#4fc08d",
  react: "#61dafb",
  html: "#6abecd",
  css: "#3e54a3",
  js: "#e13784",
};

const FtCard: FC<FtCardProps> = ({
  name,
  link,
  image,
  techs,
  author = "XX",
  avator,
}) => {
  return (
    <Link to={link}>
      <div className='card'>
        <div
          className='card-image'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className='card-content'>
          <div className='card-title'>{name}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <div className='card-author'>@{author}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { FtCard };
export type { FtCardProps };

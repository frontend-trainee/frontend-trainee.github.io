import React, { FC, useState } from "react";
import "./index.less";

import { HashRouter as Router, Link } from "react-router-dom";
import { FtCardProps } from "../common/types";
import { FtCard } from "..";
import iconToggle from "./assets/icon-toggle.svg";

type FtMenuProps = {
  items: FtCardProps[];
};

const FtMenu: FC<FtMenuProps> = ({ items }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className='menu-wrap'>
      <div className={"menu" + `${open ? " open" : ""}`}>
        {items.map((item, index) => (
          <FtCard {...item} key={index} />
        ))}
        <div className='footer'>
          2021
          <a href='https://github.com/frontend-trainee'>
            @github/frontend-trainee
          </a>
          {/* <img src={iconToggle} onClick={() => setOpen((old) => !old)} /> */}
        </div>
      </div>
    </div>
  );
};

export { FtMenu };
export type { FtMenuProps };

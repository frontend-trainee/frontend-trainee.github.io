import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./index.less";

type FtNavProps = {};

const FtNav: FC<FtNavProps> = () => {
  return (
    <div className='nav'>
      <Link to='/home'>
        <div className='nav-title'>Frontend Trainee</div>
      </Link>
    </div>
  );
};

export { FtNav };
export type { FtNavProps };

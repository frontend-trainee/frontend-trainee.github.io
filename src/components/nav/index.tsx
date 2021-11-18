import React, { FC } from "react";
import "./index.less";

type FtNavProps = {};

const FtNav: FC<FtNavProps> = () => {
  return (
    <div className='nav'>
      <div className='nav-title'>Frontend Trainee</div>
    </div>
  );
};

export { FtNav };
export type { FtNavProps };

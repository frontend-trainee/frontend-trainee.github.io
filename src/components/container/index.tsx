import React, { FC } from "react";
import "./index.less";
import ftLogo from "../../../src/ft-logo.png";

type FtContainerProps = {};

const FtContainer: FC<FtContainerProps> = () => {
  return (
    <div id='container'>
      <div className='desc'>
        <div className='desc-container'>
          <img src={ftLogo}></img>
          <div className='desc-author'>
            Group:
            <a href='https://github.com/frontend-trainee' className='groupName'>
              Pick Me！
            </a>
          </div>
          <div className='desc-content'>
            {/* <div>一个练习作品 gallery 展</div> */}
            {/* <div>一次微前端在社区的实践</div>
            <div>一场 idea 到实现的旅程🚶🏻‍♀️🚶</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FtContainer };
export type { FtContainerProps };

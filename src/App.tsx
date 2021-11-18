import { useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./App.less";
import { FtContainer, FtMenu, FtNav } from "./components";
import { FtCardProps } from "./components/common/types";
import { microAppsData } from "./microApps/config";

const microAppData: FtCardProps[] = microAppsData;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <FtNav />
      <div className='content'>
        <FtMenu items={microAppData} />
        <FtContainer />
      </div>
    </Router>
  );
};

export default App;

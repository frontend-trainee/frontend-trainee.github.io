import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { registerMicroApps, start } from "qiankun";
import { microAppsData } from "./microApps/config";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root-0")
);

const getActiveRule = (hash: string) => (location: any) =>
  location.hash.startsWith(hash);

// 是否 production 环境
const isEnvProd = import.meta.env.PROD;
const prodEntryPrefix = "//frontend-trainee.github.io";

/**
 * name: string;
  link: string;
  image: string;
  techs: string[];
  author?: string;
  avator?: string;
  localPort?: number;
  type: "react" | "vue";
 */

const microAppsConfig = microAppsData.map(
  ({ name, link, localPort, type }) => ({
    name,
    entry: isEnvProd
      ? prodEntryPrefix + link
      : "//localhost:" + localPort + (type == "react" ? link : ""),
    container: "#container",
    activeRule: getActiveRule("#" + link),
  })
);

registerMicroApps(microAppsConfig);

start();

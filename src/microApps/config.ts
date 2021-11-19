import imageReact from "./images/react.png";
import imageVue from "./images/vue.png";
import imageTimeTracking from "./images/time-tracking.jpeg";
import imageCalculator from "./images/calculator-app-main.png";
import imageVueVisualization from "./images/vue-visualization.png";

export type MicroAppConfig = {
  name: string;
  link: string;
  image: string;
  pageLink: string;
  techs: string[];
  authors?: {
    username: string;
    link: string;
    avator?: string;
  }[];
  localPort?: number;
  type: "react" | "vue";
};

const ghPagesUrlBase = "https://frontend-trainee.github.io";

const microAppsData: MicroAppConfig[] = [
  {
    name: "vue-visualization",
    link: "/vue-visualization/",
    pageLink: ghPagesUrlBase + "/vue-visualization/",
    image: imageVueVisualization,
    techs: ["Vue2", "JS", "CSS", "HTML"],
    authors: [
      {
        username: "hardingCheng",
        link: "https://github.com/hardingCheng",
      },
    ],
    localPort: 8082,
    type: "vue",
  },
  {
    name: "calculator-app-main",
    link: "/calculator-app-main",
    pageLink: ghPagesUrlBase + "/calculator-app-main/",
    image: imageCalculator,
    techs: ["React", "JS", "CSS", "HTML"],
    authors: [
      {
        username: "Cicici-Shi",
        link: "https://github.com/Cicici-Shi",
      },
      {
        username: "ccibx",
        link: "https://github.com/ccibx",
      },
    ],
    localPort: 5002,
    type: "react",
  },
  {
    name: "time-tracking-dashboard",
    link: "/time-tracking-dashboard",
    pageLink: ghPagesUrlBase + "/time-tracking-dashboard/",
    image: imageTimeTracking,
    techs: ["React", "TS", "CSS", "HTML"],
    authors: [
      {
        username: "MleMoe",
        link: "https://github.com/MleMoe",
      },
    ],
    localPort: 5001,
    type: "react",
  },
  {
    name: "micro-app-react",
    link: "/micro-app-react",
    pageLink: ghPagesUrlBase + "/micro-app-react/",
    image: imageReact,
    techs: ["React", "TS", "CSS", "HTML"],
    authors: [
      {
        username: "MleMoe",
        link: "https://github.com/MleMoe",
      },
    ],
    localPort: 5000,
    type: "react",
  },
  {
    name: "micro-app-vue2",
    link: "/micro-app-vue2/",
    pageLink: ghPagesUrlBase + "/micro-app-vue2/",
    image: imageVue,
    techs: ["Vue2", "JS", "CSS", "HTML"],
    authors: [
      {
        username: "MleMoe",
        link: "https://github.com/MleMoe",
      },
    ],
    localPort: 8080,
    type: "vue",
  },
  {
    name: "micro-app-vue3",
    link: "/micro-app-vue3/",
    pageLink: ghPagesUrlBase + "/micro-app-vue3/",
    image: imageVue,
    techs: ["Vue3", "TS", "CSS", "HTML"],
    authors: [
      {
        username: "MleMoe",
        link: "https://github.com/MleMoe",
      },
    ],
    localPort: 8081,
    type: "vue",
  },
];

export { microAppsData };

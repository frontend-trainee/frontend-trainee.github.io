import imageReact from "./images/react.png";
import imageVue from "./images/vue.png";
import imageTimeTracking from "./images/time-tracking.jpeg";
import imageCalculator from "./images/calculator-app-main.png";
import imageVueVisualization from "./images/vue-visualization.png";

export type MicroAppConfig = {
  name: string;
  link: string;
  image: string;

  techs: string[];
  author?: string;
  avator?: string;
  localPort?: number;
  type: "react" | "vue";
};

const microAppsData: MicroAppConfig[] = [
  {
    name: "vue-visualization",
    link: "/vue-visualization/",
    image: imageVueVisualization,
    techs: ["Vue2", "JS", "CSS", "HTML"],
    author: "hardingCheng",
    localPort: 8082,
    type: "vue",
  },
  {
    name: "calculator-app-main",
    link: "/calculator-app-main",
    image: imageCalculator,
    techs: ["React", "JS", "CSS", "HTML"],
    author: "Cicici-Shi/ccibx",
    localPort: 5002,
    type: "react",
  },
  {
    name: "time-tracking-dashboard",
    link: "/time-tracking-dashboard",
    image: imageTimeTracking,
    techs: ["React", "JS", "CSS", "HTML"],
    author: "Mia",
    localPort: 5001,
    type: "react",
  },
  {
    name: "micro-app-react",
    link: "/micro-app-react",
    image: imageReact,
    techs: ["React", "JS", "CSS", "HTML"],
    author: "Mia",
    localPort: 5000,
    type: "react",
  },
  {
    name: "micro-app-vue2",
    link: "/micro-app-vue2/",
    image: imageVue,
    techs: ["Vue2", "JS", "CSS", "HTML"],
    author: "Mia",
    localPort: 8080,
    type: "vue",
  },
  {
    name: "micro-app-vue3",
    link: "/micro-app-vue3/",
    image: imageVue,
    techs: ["Vue3", "JS", "CSS", "HTML"],
    author: "Mia",
    localPort: 8081,
    type: "vue",
  },
];

export { microAppsData };

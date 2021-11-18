import imageReact from "./images/react.png";
import imageVue from "./images/vue.png";
import imageTimeTracking from "./images/time-tracking.jpeg";

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
    link: "/micro-app-vue2",
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
  {
    name: "time-tracking-dashboard",
    link: "/time-tracking-dashboard",
    image: imageTimeTracking,
    techs: ["React", "JS", "CSS", "HTML"],
    author: "Mia",
    localPort: 5001,
    type: "react",
  },
];

export { microAppsData };

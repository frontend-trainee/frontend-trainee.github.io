export type FtCardProps = {
  name: string;
  link: string;
  pageLink: string;
  image: string;
  techs: string[];
  authors?: {
    username: string;
    link: string;
    avator?: string;
  }[];
};

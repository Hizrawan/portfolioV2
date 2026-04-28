import PortfolioClient from "./portfolio-client";
import { certificates } from "../lib/content";

export default function Home() {
  return <PortfolioClient certificates={certificates} />;
}

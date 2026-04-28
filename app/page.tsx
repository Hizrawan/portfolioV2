import PortfolioClient from "./portfolio-client";
import { getAllCertificates } from "../lib/certificates-server";

export default function Home() {
  return <PortfolioClient certificates={getAllCertificates()} />;
}

import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ContentNav from "../../components/content-nav";
import { getAllCertificates } from "../../lib/certificates-server";

export const metadata = {
  title: "Hizrawan's Portfolio",
  description: "List of certificates, credentials, and language proficiency records.",
};

function publicFileExists(filePath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", filePath.replace(/^\//, "")));
}

export default function CertificatesPage() {
  const certificates = getAllCertificates();

  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">Credentials</p>
            <h1 className="content-title">All Certificates</h1>
            <p className="content-subtitle">
              Project management preparation, professional language certificates, and credentials that support international collaboration.
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="content-grid">
          {certificates.map((certificate) => (
            <article key={certificate.slug} className="content-card">
              <div className="certificate-card-cover content-card-cover">
                <span>{certificate.score ?? certificate.year}</span>
                {publicFileExists(certificate.imageFile) ? (
                  <img src={certificate.imageFile} alt={`${certificate.title} certificate`} />
                ) : null}
              </div>

              <div className="content-card-meta">
                <span>{certificate.status}</span>
                <span>{certificate.year}</span>
              </div>
              <h2>{certificate.title}</h2>
              <p>{certificate.summary}</p>

              <div className="content-tag-row">
                <span className="content-tag">{certificate.issuer}</span>
                {certificate.score ? <span className="content-tag">Score {certificate.score}</span> : null}
              </div>

              <div className="content-link-row">
                <Link href={`/certificates/${certificate.slug}`} className="content-link">
                  View Certificate
                </Link>
                {certificate.externalUrl ? (
                  <a
                    href={certificate.externalUrl}
                    className="content-link secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Issuer
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

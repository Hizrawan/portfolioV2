import Link from "next/link";
import ContentNav from "../../components/content-nav";
import { certificates } from "../../lib/content";

export const metadata = {
  title: "All Certificates — Hizrawan",
  description: "List of certificates, credentials, and language proficiency records.",
};

export default function CertificatesPage() {
  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper">
        <Link href="/" className="content-back-link">
          ← Back to Home
        </Link>

        <p className="content-kicker">Credentials</p>
        <h1 className="content-title">All Certificates</h1>
        <p className="content-subtitle">
          Project management preparation, professional language certificates, and credentials that support international collaboration.
        </p>

        <div className="content-grid">
          {certificates.map((certificate) => (
            <article key={certificate.slug} className="content-card">
              <div className="certificate-card-cover content-card-cover">
                <span>{certificate.score ?? certificate.year}</span>
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
                  View Detail
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

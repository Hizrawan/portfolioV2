import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentNav from "../../../components/content-nav";
import { certificateBySlug, certificates } from "../../../lib/content";

type CertificateDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return certificates.map((certificate) => ({ slug: certificate.slug }));
}

export async function generateMetadata({ params }: CertificateDetailPageProps) {
  const { slug } = await params;
  const certificate = certificateBySlug.get(slug);

  if (!certificate) {
    return {
      title: "Hizrawan's Portfolio",
    };
  }

  return {
    title: "Hizrawan's Portfolio",
    description: certificate.summary,
  };
}

export default async function CertificateDetailPage({ params }: CertificateDetailPageProps) {
  const { slug } = await params;
  const certificate = certificateBySlug.get(slug);

  if (!certificate) {
    notFound();
  }

  const pdfPath = path.join(process.cwd(), "public", certificate.pdfFile.replace(/^\//, ""));
  const hasPdf = fs.existsSync(pdfPath);

  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper story-reader-wrapper">
        <div className="content-page-hero detail-hero">
          <div>
            <p className="content-kicker">
              {certificate.status} · {certificate.year}
            </p>
            <h1 className="content-title">{certificate.title}</h1>
            <p className="content-subtitle">{certificate.summary}</p>
          </div>
          <div className="content-back-actions">
            <Link href="/certificates" className="content-back-link">
              ← All Certificates
            </Link>
            <Link href="/" className="content-back-link secondary-back">
              Home
            </Link>
          </div>
        </div>

        <article className="story-reader" aria-label={`${certificate.title} certificate reader`}>
          <header className="story-reader-topbar">
            <div>
              <span className="story-reader-label">Certificate Viewer</span>
              <p>
                {certificate.issuer} · {certificate.score ? `Score ${certificate.score}` : certificate.year}
              </p>
            </div>
            <div className="story-reader-tools" aria-label="Certificate controls">
              <a href={certificate.pdfFile} target="_blank" rel="noreferrer">
                Open PDF
              </a>
              <a href={certificate.pdfFile} download>
                Download
              </a>
              {certificate.externalUrl ? (
                <a href={certificate.externalUrl} target="_blank" rel="noreferrer">
                  Issuer
                </a>
              ) : null}
            </div>
          </header>

          <div className="story-book">
            <div className="story-pdf-page">
              <div className="story-page-meta">
                <span>{certificate.status}</span>
                <span>{hasPdf ? "PDF Ready" : "PDF Missing"}</span>
              </div>

              <div className="content-tag-row">
                <span className="content-tag">{certificate.issuer}</span>
                {certificate.score ? <span className="content-tag">Score {certificate.score}</span> : null}
              </div>

              <div className="content-prose">
                {certificate.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {hasPdf ? (
                <iframe
                  className="story-pdf-frame"
                  src={`${certificate.pdfFile}#toolbar=1&navpanes=0&view=FitH`}
                  title={`${certificate.title} PDF viewer`}
                />
              ) : (
                <div className="story-pdf-placeholder">
                  <p>PDF certificate ini belum tersedia.</p>
                  <p>
                    Simpan PDF di <code>public{certificate.pdfFile}</code>, lalu halaman ini otomatis menjadi viewer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

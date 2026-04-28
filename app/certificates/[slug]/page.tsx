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
      title: "Certificate Not Found",
    };
  }

  return {
    title: `${certificate.title} — Certificate Detail`,
    description: certificate.summary,
  };
}

export default async function CertificateDetailPage({ params }: CertificateDetailPageProps) {
  const { slug } = await params;
  const certificate = certificateBySlug.get(slug);

  if (!certificate) {
    notFound();
  }

  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper content-detail">
        <Link href="/certificates" className="content-back-link">
          ← Back to All Certificates
        </Link>
        <div>
          <Link href="/" className="content-back-link">
            ← Back to Home
          </Link>
        </div>

        <p className="content-kicker">
          {certificate.status} · {certificate.year}
        </p>
        <h1 className="content-title">{certificate.title}</h1>
        <p className="content-subtitle">{certificate.summary}</p>

        <div className="content-tag-row">
          <span className="content-tag">{certificate.issuer}</span>
          {certificate.score ? <span className="content-tag">Score {certificate.score}</span> : null}
        </div>

        <div className="content-prose">
          {certificate.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {certificate.externalUrl ? (
          <div className="content-link-row">
            <a
              href={certificate.externalUrl}
              className="content-link"
              target="_blank"
              rel="noreferrer"
            >
              Open Issuer Page
            </a>
          </div>
        ) : null}
      </section>
    </main>
  );
}

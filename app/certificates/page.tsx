"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import { useLocalization } from "../../components/localization-provider";
import { certificates } from "../../lib/content";

export default function CertificatesPage() {
  const { t } = useLocalization();

  return (
    <main className="content-page">
      <SiteHeader linkMode="home" />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">{t("certificates.kicker")}</p>
            <h1 className="content-title">{t("certificates.title")}</h1>
            <p className="content-subtitle">
              {t("certificates.subtitle")}
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← {t("pages.backHome")}
            </Link>
          </div>
        </div>

        <div className="content-grid">
          {certificates.map((certificate) => (
            <article key={certificate.slug} className="content-card certificate-list-card">
              <div className="certificate-card-cover content-card-cover">
                <span>{certificate.score ?? certificate.year}</span>
                <img src={certificate.imageFile} alt={`${certificate.title} certificate`} />
              </div>

              <div className="content-card-meta">
                <span>{certificate.status}</span>
                <span>{certificate.year}</span>
              </div>
              <h2>{certificate.title}</h2>
              <p>{certificate.summary}</p>

              <div className="content-tag-row certificate-issuer-row">
                <span className="content-tag">{certificate.issuer}</span>
                {certificate.score ? <span className="content-tag">Score {certificate.score}</span> : null}
              </div>

              <div className="content-link-row">
                <Link href={`/certificates/${certificate.slug}`} className="content-link">
                  {t("pages.viewCertificate")}
                </Link>
                {certificate.externalUrl ? (
                  <a
                    href={certificate.externalUrl}
                    className="content-link secondary issuer-verify-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to verify with the issuer
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

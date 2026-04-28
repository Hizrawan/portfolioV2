import fs from "node:fs";
import path from "node:path";
import { type Certificate, certificates } from "./content";

const certificateDirectories = ["certificates", "certificats"];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function titleFromSlug(slug: string) {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function scanDirectory(directory: string) {
  const absoluteDirectory = path.join(process.cwd(), "public", directory);
  if (!fs.existsSync(absoluteDirectory)) return [];

  return fs
    .readdirSync(absoluteDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const extension = path.extname(entry.name).toLowerCase();
      const slug = path.basename(entry.name, extension);

      return {
        slug,
        extension,
        publicPath: `/${directory}/${entry.name}`,
      };
    });
}

export function getAllCertificates(): Certificate[] {
  const discoveredFiles = certificateDirectories.flatMap(scanDirectory);
  const filesBySlug = new Map<string, { imageFile?: string; pdfFile?: string }>();

  discoveredFiles.forEach((file) => {
    const current = filesBySlug.get(file.slug) ?? {};
    if (imageExtensions.has(file.extension)) {
      current.imageFile = file.publicPath;
    }
    if (file.extension === ".pdf") {
      current.pdfFile = file.publicPath;
    }
    filesBySlug.set(file.slug, current);
  });

  const certificateMap = new Map<string, Certificate>(
    certificates.map((certificate) => [certificate.slug, certificate]),
  );

  filesBySlug.forEach((files, slug) => {
    const existing = certificateMap.get(slug);
    if (existing) {
      certificateMap.set(slug, {
        ...existing,
        imageFile: files.imageFile ?? existing.imageFile,
        pdfFile: files.pdfFile ?? existing.pdfFile,
      });
      return;
    }

    certificateMap.set(slug, {
      slug,
      title: titleFromSlug(slug),
      issuer: "Certificate",
      year: "Completed",
      status: "Certificate",
      imageFile: files.imageFile ?? `/certificates/${slug}.jpg`,
      pdfFile: files.pdfFile ?? `/certificates/${slug}.pdf`,
      summary: "Certificate document added from the public certificates folder.",
      details: ["This certificate was loaded automatically from the public certificates folder."],
    });
  });

  return Array.from(certificateMap.values());
}

export function getCertificateBySlug(slug: string) {
  return getAllCertificates().find((certificate) => certificate.slug === slug);
}

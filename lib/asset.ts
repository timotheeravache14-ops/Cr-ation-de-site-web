// Prefix public assets (images, etc.) with the deployment base path.
// Set to e.g. "/Cr-ation-de-site-web" for GitHub Pages, empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function asset(path: string): string {
  return `${basePath}${path}`
}

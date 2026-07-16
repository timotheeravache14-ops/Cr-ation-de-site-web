// Prefix public assets with the deployment base path (GitHub Pages project URL).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function asset(path: string): string {
  return `${basePath}${path}`
}

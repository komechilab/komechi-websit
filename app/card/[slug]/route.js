// 전자명함: content/cards/<slug>.html 을 그대로 내려준다 (빌드 때 정적으로 생성)
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "content", "cards");

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return readdirSync(DIR)
    .filter((f) => f.endsWith(".html"))
    .map((f) => ({ slug: f.slice(0, -5) }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  return new Response(readFileSync(path.join(DIR, `${slug}.html`), "utf8"), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

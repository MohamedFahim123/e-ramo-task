import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

function normalizeRoute(route: string) {
  const cleaned = route.replaceAll("\\", "/");
  if (!cleaned || cleaned === "page") return "";
  return `/${cleaned.replace(/\/page$/, "").replace(/\[(.+?)\]/g, ":$1")}`;
}

function walk(dir: string, root: string, routes = new Set<string>()) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, root, routes);
      continue;
    }

    if (entry !== "page.tsx") {
      continue;
    }

    const filePath = relative(root, fullPath).split(sep).join("/");
    routes.add(normalizeRoute(filePath));
  }

  return routes;
}

export function getAppRoutes() {
  const appRoot = join(process.cwd(), "src", "app", "[locale]");
  return Array.from(walk(appRoot, appRoot)).filter((route) => !route.includes(":"));
}

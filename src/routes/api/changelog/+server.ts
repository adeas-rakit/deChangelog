import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export const GET = (async ({ url }) => {
  try {
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 10;

    const changelogDir = join(process.cwd(), "src/content/changelog");
    const files = readdirSync(changelogDir);

    const changelogs = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const content = readFileSync(join(changelogDir, file), "utf-8");
        const { data } = matter(content);
        return {
          id: data.id,
          date: data.date,
          title: data.title,
          categories: data.categories,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return json({
      changelogs: changelogs.slice((page - 1) * limit, page * limit),
      pagination: {
        page,
        limit,
        total: changelogs.length,
      },
    });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}) satisfies RequestHandler;

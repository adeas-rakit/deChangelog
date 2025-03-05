import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { marked } from "marked";

export const GET = (async ({ params }) => {
  try {
    const changelogPath = join(
      process.cwd(),
      "src/content/changelog",
      `${params.id}.md`,
    );
    const content = readFileSync(changelogPath, "utf-8");
    const { data, content: markdownContent } = matter(content);

    return json({
      id: data.id,
      date: data.date,
      title: data.title,
      categories: data.categories,
      content: marked(markdownContent),
    });
  } catch (err) {
    return new Response("Changelog not found", { status: 404 });
  }
}) satisfies RequestHandler;

import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({ fetch, url }) => {
  try {
    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";

    const response = await fetch(`/api/changelog?page=${page}&limit=${limit}`);
    const data = await response.json();

    return {
      changelogs: data.changelogs,
      pagination: data.pagination,
    };
  } catch (err) {
    throw error(500, "Failed to fetch changelogs");
  }
}) satisfies PageServerLoad;

import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({ fetch, params }) => {
  const response = await fetch(`/api/changelog/${params.id}`);

  if (!response.ok) {
    throw error(404, "Changelog not found");
  }

  return await response.json();
}) satisfies PageServerLoad;

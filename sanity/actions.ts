import { readClient } from "./lib/client";
import { groq } from "next-sanity";
import { buildQuery } from "./utils";
interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;
  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image":poster.asset->url,
        views,
        slug,
        category
      }`
    );
  } catch (error) {
    console.log(error);
  }
};

import { readClient } from './lib/client';
import { groq } from "next-sanity";
interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
export const getResources = async (params: GetResourcesParams) => {
    const {query, category, page}= params;
    try{
       const resources = await readClient.fetch(
        groq``
       )
    }catch(error){
        console.log(error)
    }
};

import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typing";

import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;
type Data = {
    projects: Project[]
}
interface ErrorResponse {
    error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>){
    if (req.method === "GET") {
        try {
            const projects: Project[] = await sanityClient.fetch(query);
            return res.status(200).json({projects})
        } catch (error) {
            const errorResponse: ErrorResponse = {error: 'Internal Server Errror'};
            return res.status(500).json(errorResponse);
        }
    } else {
        const errorResponse: ErrorResponse = {error: 'Internal Server Errror'};
            return res.status(405).json(errorResponse);
        }
    }
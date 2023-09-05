
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo} from "@/typing";

import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "pageInfo"][0]
`;
interface Data {
    pageInfo: PageInfo;
};
interface ErrorResponse {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>){
    if (req.method === "GET") {
        try {
            const pageInfo: PageInfo = await sanityClient.fetch(query);
            return res.status(200).json({ pageInfo });
        } catch (error) {
            const errorResponse: ErrorResponse = {error: 'Internal Server Error'}
            return res.status(500).json(errorResponse);        }
    } else {
        const errorResponse: ErrorResponse = { error: 'Method not allowed'}
        return res.status(405).json(errorResponse);
    }
}

import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo, pageInfoPDF} from "@/typing";

import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
*[_type == "pageInfo"]{pdf[]->}
`;
interface Data {
    pdf: pageInfoPDF;
};
interface ErrorResponse {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>){
    if (req.method === "GET") {
        try {
            const pdf: pageInfoPDF = await sanityClient.fetch(query);
            return res.status(200).json({ pdf });
        } catch (error) {
            const errorResponse: ErrorResponse = {error: 'Internal Server Error'}
            return res.status(500).json(errorResponse);        }
    } else {
        const errorResponse: ErrorResponse = { error: 'Method not allowed'}
        return res.status(405).json(errorResponse);
    }
}
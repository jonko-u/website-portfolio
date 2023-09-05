import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typing";

const query = groq`
    *[_type == "social"]
`
type Data = {
    socials: Social[]
}
interface ErrorResponse {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>){
    if (req.method === "GET") {
        try {
            const socials: Social[] = await sanityClient.fetch(query);
            return res.status(200).json({socials});
        } catch (error) {
            const errorResponse: ErrorResponse = { error: "Internal Server Error" };
            return res.status(500).json(errorResponse);
        }
    } else {
        const errorResponse: ErrorResponse = { error: "Method Not Allowed" };
        return res.status(405).json(errorResponse);
    }
}
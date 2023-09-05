import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typing";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`
type Data = {
    experiences: Experience[]
}

interface ErrorResponse {
    error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>){
    if (req.method === "GET") {
        try {
            const experiences: Experience[] = await sanityClient.fetch(query);
            return res.status(200).json({experiences});
        } catch (error) {
            const errorResponse: ErrorResponse = {error: 'Internal Server Error'};
            return res.status(500).json(errorResponse);
        }
    } else {
        const errorResponse: ErrorResponse = {error: 'Method not allowed'};
        return res.status(405).json(errorResponse);
    }
}
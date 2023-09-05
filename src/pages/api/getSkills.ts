import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typing";
import { NextRequest, NextResponse } from "next/server";

const query = groq`
    *[_type == "skill"]
`;

type Data = {
    skills: Skill[];
};
interface ErrorResponse {
    error: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
    if (req.method === "GET") {
        try {
            const skills: Skill[] = await sanityClient.fetch(query);

            // Add Cache-Control headers to the response           

            return res.status(200).json({skills})
        } catch (error) {
            const errorResponse: ErrorResponse = {error: 'Internal Server Errror'}
            return res.status(500).json(errorResponse);
        }
    } else {
        const errorResponse: ErrorResponse = {error: 'Method not allowed'}
            return res.status(405).json(errorResponse);
        }
}
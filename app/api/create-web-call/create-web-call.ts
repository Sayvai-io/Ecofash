import { NextApiRequest, NextApiResponse } from 'next';
import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: process.env.RETELL_AI_API_KEY || '', // Ensure the API key is set
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const webCallResponse = await client.call.createWebCall({
      agent_id: 'agent_52b42a60d695177ad334090163', // Replace with your agent ID
    });

    console.log("Web Call Response:", webCallResponse);
    res.status(200).json(webCallResponse);
  } catch (error) {
    console.error("Error creating web call:", error);
    res.status(500).json({ error: "Failed to create web call" });
  }
}

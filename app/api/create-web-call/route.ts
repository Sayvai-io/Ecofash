import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: `Bearer ${process.env.RETELL_AI_API_KEY}` || '', // Ensure the API key is set correctly
});


export async function POST(req: NextRequest) {
  try {
    const webCallResponse = await client.call.createWebCall({
      agent_id: 'agent_52b42a60d695177ad334090163',
    });

    console.log("Web Call Response:", webCallResponse);
    return NextResponse.json(webCallResponse, { status: 200 });
  } catch (error) {
    console.error("Error creating web call:", error);
    return NextResponse.json({ error: "Failed to create web call" }, { status: 500 });
  }
}

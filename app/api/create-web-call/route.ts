import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: `Bearer ${process.env.RETELL_AI_API_KEY}` || '',
});


export async function POST(req: NextRequest) {
    try {
      const webCallResponse = await client.call.createWebCall({
        agent_id: 'oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD',
      });
  
      console.log("Web Call Response:", webCallResponse);
      
      // Ensure you return a proper JSON response
      return NextResponse.json(webCallResponse, { status: 200 });
    } catch (error) {
      console.error("Error creating web call:", error);
  
      // Handle and return a JSON error response
      return NextResponse.json({ error: "Failed to create web call" }, { status: 500 });
    }
}

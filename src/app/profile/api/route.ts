import { headers } from "next/headers";
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    const requestHeaders = new Headers(req.headers)
    const headerList = headers()
    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));
    
    
    return new Response('<h1>api for profile</h1>', {
        headers: {
            'Content-Type': 'text/html'
        }
    })
}
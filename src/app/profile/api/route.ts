import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    const requestHeaders = new Headers(req.headers)
    const headerList = headers()
    cookies().set('resultPerPage', '20')

    const theme = req.cookies.get('theme')

    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));
    console.log(theme);
    console.log(cookies().getAll());
    console.log(cookies().get('resultPerPage'));
    
    return new Response('<h1>api for profile</h1>', {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': "theme=dark",
        }
    })
}
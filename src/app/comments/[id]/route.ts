import { comments } from "../data"

export async function GET(
    req: Request,
    { params }: {
        params: { id: string }
    }
) {
    const comment = comments.find(comment => comment.id === parseInt(params.id))

    if (!comment) {
        return new Response("Not found", { status: 404 })
    }

    return Response.json(comment)
}
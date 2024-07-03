import { log } from "console"
import { comments } from "../data"

type contextType = {
    params: { id: string }
}

export async function GET(
    req: Request,
    {params}: contextType
) {
    const comment = comments.find(comment => comment.id === parseInt(params.id))

    if (!comment) {
        return new Response("Not found", { status: 404 })
    }

    return Response.json(comment)
}

export async function PATCH(req: Request, {params}: contextType) {
    const body = await req.json()
    const {text} = body

    const index = comments.findIndex(comment => comment.id === parseInt(params.id))

    comments[index].text = text

    return Response.json(comments[index])
}

export async function DELETE(req: Request, {params}: contextType) {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id))
    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}
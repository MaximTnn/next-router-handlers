import { log } from "console"
import { comments } from "../data"
import { redirect } from "next/navigation"

type contextType = {
    params: { id: string }
}

export async function GET(
    req: Request,
    {params}: contextType
) {
    const comment = comments.find(comment => comment.id === parseInt(params.id))

    if (!comment) {
        redirect('/');
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

    if (!deletedComment) {
        return new Response("comment not found", { status: 404 })
    }

    comments.splice(index, 1)
    return new Response(
        JSON.stringify(deletedComment),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    )
}
import { comments } from "./data"

// Note: using extension Thunder Client to test requests - similar to postman

export async function GET() {
  return Response.json(comments)
}

export async function POST(request: Request) {
  const comment = await request.json()
  const newComment = {
    id: comments.length + 1,
    text: comment.text
  }
  comments.push(newComment)
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  })
}
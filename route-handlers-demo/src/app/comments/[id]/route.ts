import { comments } from "../data"

// Make a request to - http://localhost:3000/comments/:id -> where :id is the dynamic segment for the id e.x. 1, 2, etc

export async function GET(_request: Request, {params} : {params: {id: string}}) {
  const comment = comments.find(comment => comment.id === parseInt(params.id))
  return Response.json(comment)
}

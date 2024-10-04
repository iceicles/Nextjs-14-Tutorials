import { comments } from "../data"

// Make a request to - http://localhost:3000/comments/:id -> where :id is the dynamic segment for the id e.x. 1, 2, etc

export async function GET(_request: Request, {params} : {params: {id: string}}) {
  const comment = comments.find(comment => comment.id === parseInt(params.id))
  return Response.json(comment)
}

export async function PATCH(request: Request, {params} : {params: {id: string}}) {
  // {params} : {params: {id: string}} is the context parameter (i.e., the :id part of the url)
  // get the request body (request body is manually set in thunder client body json tab)
  const body = await request.json()
  // extract text
  const {text} = body
  // find the comment id we want to replace
  const index = comments.findIndex(comment => comment.id === parseInt(params.id))
  // set the text of found comment to what we're sending in the body
  comments[index].text = text
  // return updated comment
  return Response.json(comments[index])
}
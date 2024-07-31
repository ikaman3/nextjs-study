export async function GET(request) {
  return new Response('Hell World!!!!')
}

export async function POST(request) {
  const response = await request.json()
  return Response.json({ response })
}

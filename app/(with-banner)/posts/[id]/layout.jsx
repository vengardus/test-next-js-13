import Link from "next/link"

// incremental static regeneration
const fetchPostServerSideInterval = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 10,
      }
    })  

  return res.json()
}

export default async function PostLayout({ children, params }) {
  const { id } = params
  const post = await fetchPostServerSideInterval(id)

  return (
    <div>
      <p>This is a post: {id}</p>
      <article>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
        <Link href={`posts/${id}/comments`}>See comments</Link>
      </article>
      
      { children }
    </div>
  )
}
import Link from "next/link"

// incremental static regeneration
const fetchCommentsServerSideInterval = async (id) => {
	await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 10,
      }
    })

  return res.json()
}

export default async function CommentsPage({ params }) {
  const { id } = params
  const comments = await fetchCommentsServerSideInterval(id)

  return (
    <div>
      <p>These are the comments: {id}</p>
      <ul>
        { comments.map(comment => (
            <li key={comment.id}>
                <h1>{comment.name}</h1>
                <p>{comment.body}</p>
            </li>
        ))
        }
      </ul>
    </div>
  )
}
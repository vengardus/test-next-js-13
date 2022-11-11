import Link from "next/link"
import LinkButton from "./linkbutton"


// old getStaticProps
const fetchPostsStatic = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log('FETCHING POSTS!!!!!!!')
  return res.json()
    
}

// old getServerSideProps
const fetchPostsServerSideCache = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
                          { cache: 'no-store'})
  console.log('FETCHING POSTS!!!!!!!')
  return res.json()
    
}

// incremental static regeneration
const fetchPostsServerSideInterval = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
                          { next: {
                              revalidate:10,
                          }})
  console.log('FETCHING POSTS!!!!!!!')
  return res.json()
    
}

export async function ListOfPosts() {
  const posts = await fetchPostsServerSideInterval()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='posts/[id]' as={`posts/${post.id}`}>
        <h2 style={{color:'purple'}}>{post.title}</h2>
        <p>{post.body}</p>
        <LinkButton key={post.id}/>
      </Link>
    </article>
  ))
}
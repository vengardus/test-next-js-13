import Counter from "./posts/[id]/counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      <h1>This is the PostsLayout - now shared for (with-banner) group </h1>
      <Counter/>
      {children}
    </div>
  )
}
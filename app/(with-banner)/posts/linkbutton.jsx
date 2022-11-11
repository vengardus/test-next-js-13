'use client'

import { useState } from "react"


export default function LinkButton({id}) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked? '*' : 'o'}
    </button>
  )
}
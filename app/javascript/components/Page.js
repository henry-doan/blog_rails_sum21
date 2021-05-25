import React from 'react';

const Page = ({ page }) => {
  const { id, title, body, author, created_at } = page 
  // const id = page.id
  // const title = page.title
  // const body = page.body
  // const author = page.author
  // const created_at = page.created_at
  return(
    <>
      <h1>{ title }</h1>
      <h3>By: { author }</h3>
      <p>{ body }</p>
      <p>
        created: { created_at }, id: { id }
      </p>
      <a href="/pages"> back </a>
    </>
  )
}

export default Page;
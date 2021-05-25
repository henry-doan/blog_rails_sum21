import React from 'react'; 

const Pages = ({ pages }) => (
  <>
    <h1 className='header'>All Pages</h1>
    <a href="/pages/new">New Page</a>
    <ul>
      {
        pages.map( p => (
          <li key={p.id}>
            {p.title}
            {" "}
            <a href={"http://localhost:3000/pages/" + p.id }>
              show
            </a>
          </li>
        ))
      }
    </ul>
  </>
)

export default Pages;
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const image = 'https://m.media-amazon.com/images/I/71K+9YJ7VbL._SY522_.jpg'
const title =
  'Dog Man: Big Jim Begins: A Graphic Novel (Dog Man #13): From the Creator of Captain Underpants'
const author = 'Dav Pilkey'

const BookList = () => {
  return (
    <section className="booklist">
      <Book image={image} title={title} author={author} />
      <Book image={image} title={title} author={author} />
      <Book image={image} title={title} author={author} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt={props.title} width={192} height={285} />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

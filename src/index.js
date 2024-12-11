import React from 'react'
import ReactDOM from 'react-dom/client'
import { BOOKS } from './data/books-data'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      {BOOKS.map((book) => {
        return (
          <Book key={book.id} {...book}>
            <BookDescription description={book.description} />
          </Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { id, image, title, author, children } = props
  return (
    <article key={id} className="book">
      <img src={image} alt={title} width={192} height={285} />
      <h2>{title}</h2>
      <h2 className="author">{author}</h2>
      {children}
    </article>
  )
}

const BookDescription = ({ description }) => <p>{description}</p>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

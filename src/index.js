import React from 'react'
import ReactDOM from 'react-dom/client'
import { BOOKS } from './data/books-data'
import { Book } from './ui/components/Book'
import { BookDescription } from './ui/components/BookDescription'
import './index.css'

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {BOOKS.map((book, index) => {
          return (
            <Book key={book.id} {...book} number={index}>
              <BookDescription description={book.description} />
            </Book>
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

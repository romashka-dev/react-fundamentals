import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  image: 'https://m.media-amazon.com/images/I/71K+9YJ7VbL._SY522_.jpg',
  title:
    'Dog Man: Big Jim Begins: A Graphic Novel (Dog Man #13): From the Creator of Captain Underpants',
  author: 'Dav Pilkey',
}

const secondBook = {
  image: 'https://m.media-amazon.com/images/I/41e+dwz5W5L._SY522_.jpg',
  title: 'Melania Hardcover – October 8, 2024',
  author: 'Melania Trump',
}

const thirdBook = {
  image: 'https://m.media-amazon.com/images/I/81paxLbonYL._SY522_.jpg',
  title: `From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen (Snoop Dogg Cookbook, Celebrity Cookbook with Soul Food Recipes) (Snoop Dog x Chronicle Books)`,
  author: 'Snoop Dogg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        image={thirdBook.image}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { image, title, author } = props
  return (
    <article className="book">
      <img src={image} alt={title} width={192} height={285} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

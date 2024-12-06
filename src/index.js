import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71K+9YJ7VbL._SY522_.jpg"
    alt="Dog Man: Big Jim Begins: A Graphic Novel (Dog Man #13): From the Creator of Captain Underpants"
    width={192}
    height={285}
  />
)

const Title = () => (
  <h2>
    Dog Man: Big Jim Begins: A Graphic Novel (Dog Man #13): From the Creator of
    Captain Underpants
  </h2>
)

const Author = () => <h2>Dav Pilkey</h2>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export const Book = (props) => {
  const { id, image, title, author, children, number } = props
  return (
    <article key={id} className="book">
      <img src={image} alt={title} width={192} height={285} />
      <h2>{title}</h2>
      <h2 className="author">{author}</h2>
      {children}
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

const Cards = (content) => {
    return (
        <div className="cards">
          <Image img={content} description={content}/>
          <h1>{content}</h1>
          <p>{content}</p>
        </div>
    )
}

export default Cards;
function Special({title, description, price, image}) {
    return (
    <article>
        {title}
        {price}
        {description}
        <img src={image} />
    </article>
    );
}

export default Special;

import restaurant from "../images/restaurant.jpg";

function Introduction() {
    return (
        <section>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a table</button>
                <img src={restaurant} alt="Restaurant" />
            </article>
        </section>
    );
}

export default Introduction;
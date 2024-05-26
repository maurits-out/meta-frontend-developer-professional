import salad from "../images/salad.jpg";
import bruchetta from "../images/bruchetta.jpg";
import lemonDessert from "../images/lemon-dessert.jpg";
import Special from "./Special";

function Specials() {
    return (
        <section>
            <h1>This week's specials!</h1>
            <button>Online Menu</button>
            <Special
                key="salad"
                title="Greek salad"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                price="$ 12.99"
                image={salad}
                imageAlt="Salad" />
            <Special
                key="bruchetta"
                title="Bruchetta"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                price="$ 5.99"
                image={bruchetta}
                imageAlt="Bruchetta" />
            <Special
                key="lemon-dessert"
                title="Lemon Dessert"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                price="$ 5.00"
                image={lemonDessert}
                imageAlt="Lemon Dessert" />
        </section>
    );
}

export default Specials;

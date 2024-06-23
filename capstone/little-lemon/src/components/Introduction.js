import littleLemmon from "../images/little-lemon.png";

const articleStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#495E57',
};

const imageStyle = {
    maxWidth: '100%',
    height: 'auto'
};

const introductionTitle = {
    color: '#F4CE14'
};

const introductionSubTitle = {
    color: '#EDEFEE'
};

const introductionLead = {
    color: '#EDEFEE'
};

function Introduction() {
    return (
        <section>
            <article style={articleStyle}>
                <div>
                    <h1 style={introductionTitle}>Little Lemon</h1>
                    <h2 style={introductionSubTitle}>Chicago</h2>
                    <p className="lead" style={introductionLead}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a table</button>
                </div>
                <div>
                   <img src={littleLemmon} alt="Little Lemon" style={imageStyle} />
                 </div>
            </article>
        </section>
    );
}

export default Introduction;

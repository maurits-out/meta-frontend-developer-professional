import littleLemmon from "../images/little-lemon.png";

const sectionStyle = {
    backgroundColor: '#495E57'
};

const articleStyle = {
    margin: 'auto',
    maxWidth: '850px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
};

const imageStyle = {
    maxWidth: '100%',
    height: '25rem',
    borderRadius: '5%'
};

const introductionTitle = {
    color: '#F4CE14',
    margin: '0rem',
};

const introductionSubTitle = {
    color: '#EDEFEE',
    margin: '0rem',
};

const introductionLead = {
    color: '#EDEFEE'
};

const leftStyle = {
    width: "18rem",
};

const buttonStyle = {
    margin: "10px 0px",
};

function Introduction() {
    return (
        <section style={sectionStyle}>
            <article style={articleStyle}>
                <div style={leftStyle}>
                    <h1 style={introductionTitle}>Little Lemon</h1>
                    <h2 style={introductionSubTitle}>Chicago</h2>
                    <p className="lead" style={introductionLead}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button style={buttonStyle}>Reserve a table</button>
                </div>
                <div>
                    <img src={littleLemmon} alt="Little Lemon" style={imageStyle} />
                </div>
            </article>
        </section>
    );
}

export default Introduction;

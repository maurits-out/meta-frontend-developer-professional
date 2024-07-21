const specialStyle = {
    width: '250px',
    height: '450px',
    backgroundColor: '#EDEFEE',
    borderRadius: '5% 5% 0px 0px',
    position: 'relative',
    marginRight: '1rem',
    marginBottom: '1rem',
};

const imageStyle = {
    maxWidth: '100%',
    borderRadius: '5% 5% 0px 0px',
};

const specialDetailsStyle = {
    margin: '1rem',
};

const titleStyle = {
    fontWeight: 'bolder',
    fontSize: '16px',
};

const priceStyle = {
    float: 'right',
    color: '#EE9972',
    fontWeight: 'bolder',
    fontSize: '16px',
};

const descriptionStyle = {
    fontWeight: 'normal',
    fontSize: '16px',
};

const orderDeliveryStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    position: 'absolute',
    bottom: '1rem',
};

function Special({ title, description, price, image }) {
    return (
        <article style={specialStyle}>
            <img src={image} style={imageStyle} alt={title} />
            <div style={specialDetailsStyle}>
                <span style={titleStyle}>{title}</span>
                <span style={priceStyle}>{price}</span>
                <p style={descriptionStyle}>{description}</p>
                <div style={orderDeliveryStyle}>Order a delivery &#128757;</div>
            </div>
        </article>
    );
}

export default Special;

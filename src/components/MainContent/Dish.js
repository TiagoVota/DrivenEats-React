const Dish = ({ dishData: { imgSrc, imgAlt, dishTitle, dishDescription, dishPrice } }) => {
    return (
        <div className="dish" onclick="select_dish(this)">
            <img src={imgSrc} alt={imgAlt} />
            <p className="dish-title">{dishTitle}</p>
            <p className="dish-description">{dishDescription}</p>
            <p className="dish-price">{dishPrice}</p>
            <ion-icon className="hidden" name="checkmark-circle"></ion-icon>
        </div>
    )
}


export default Dish
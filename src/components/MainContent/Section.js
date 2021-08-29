const Section = ({ sectionTitle, dishesData }) => {
    return (
        <div className="section food">
                <p className="section-title">{sectionTitle}</p>
                <div className="dishes">

                    {dishesData.map((dishData, index) => <Dish key={index} dishData={dishData}/>)}
                </div>
            </div>
    )
}


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


export default Section
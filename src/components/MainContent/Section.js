import Dish from './Dish'


const Section = ({ sectionTitle, dishesData, dishesState }) => {
    return (
        <div className="section food">
            <p className="section-title">{sectionTitle}</p>
            <div className="dishes">

                {dishesData.map((dishData, index) => <Dish
                    key={index}
                    dishIndex={index}
                    dishData={dishData}
                    dishesState={dishesState}
                />)}
            </div>
        </div>
    )
}


export default Section
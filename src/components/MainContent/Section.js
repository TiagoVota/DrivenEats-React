import Dish from './Dish'


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


export default Section
import Section from './Section'
import { sectionsData } from './SectionsData'


const MainContainer = () => {
    return (
        <div class="container">
            {sectionsData.map(({ sectionTitle, dishesFood }, index) => {
                return <Section key={index} sectionTitle={sectionTitle} dishesData={dishesFood} />
            })}
        </div>
    )
}


export default MainContainer
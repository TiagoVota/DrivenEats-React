import Section from './Section'


const MainContainer = ({ sectionsData, dishesStates }) => {
    return (
        <div className="container">
            {sectionsData.map(({ sectionTitle, dishes }, index) => <Section
                key={index}
                sectionTitle={sectionTitle}
                dishesData={dishes}
                dishesState={dishesStates[index]}
            />)}
        </div>
    )
}


export default MainContainer
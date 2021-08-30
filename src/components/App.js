import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Section from './MainContent/Section'
import { sectionsData } from './MainContent/SectionsData'


const App = () => {
    const [ selectedFood, setSelectedFood ] = useState({
        qtd: 0,
        selectedIndex: -1
    })

    const [ selectedDrink, setSelectedDink ] = useState({
        qtd: 0,
        selectedIndex: -1
    })

    const [ selectedDessert, setSelectedDessert ] = useState({
        qtd: 0,
        selectedIndex: -1
    })

    const dishesStates = [
        [selectedFood, setSelectedFood],
        [selectedDrink, setSelectedDink],
        [selectedDessert, setSelectedDessert]
    ]

    const orderList = [
        selectedFood,
        selectedDrink,
        selectedDessert
    ]

	return (
		<>
			<Header />

            <div className="container">
                <div>
                    <p>{['qtd    ', selectedFood.qtd]}</p>
                    <p>{['index    ', selectedFood.selectedIndex]}</p>
                </div>
                {sectionsData.map(({ sectionTitle, dishesFood }, index) => <Section
                    key={index}
                    sectionTitle={sectionTitle}
                    dishesData={dishesFood}
                    dishesState={dishesStates[index]}
                />)}
            </div>

            <Footer orderList={orderList}/>
		</>
	)
}


export default App
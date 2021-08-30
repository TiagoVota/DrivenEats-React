import { useState } from 'react'
import Header from './Header'
import Section from './MainContent/Section'
import Footer from './Footer'
import FinalizeOrder from './FinalizeOrder'
import { sectionsData } from './MainContent/SectionsData'
import { BrowserRouter as Router } from 'react-router-dom'


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

    const orderList = dishesStates.map(order => order[0])

	return (
		<>
			<Header />

            <div className="container">
                {sectionsData.map(({ sectionTitle, dishes }, index) => <Section
                    key={index}
                    sectionTitle={sectionTitle}
                    dishesData={dishes}
                    dishesState={dishesStates[index]}
                />)}
            </div>

            <FinalizeOrder orderList={orderList}/>

            <Footer orderList={orderList}/>
		</>
	)
}


export default App
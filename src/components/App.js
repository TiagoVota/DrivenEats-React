import { useEffect, useState } from 'react'
import { sectionsData } from './MainContent/SectionsData'
import {
    Link, 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from './Header'
import MainContainer from './MainContent/MainContainer'
import Footer from './Footer'
import FinalizeOrder from './FinalizeOrder'


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


    const [ areAllSelected, setAreAllSelected ] = useState(false)
    
    const verifyAllSelected = () => {
        const newList = orderList.filter((order) => order.qtd > 0)
        if (newList.length === orderList.length) {
            setAreAllSelected(true)
            return
        } else {
            setAreAllSelected(false)
        }
    }

    useEffect(verifyAllSelected, orderList)

	return (
		<>
			<Header />

            <Router>
                <Switch>
                    <Route path='/' exact>
                        <MainContainer
                            sectionsData={sectionsData}
                            dishesStates={dishesStates}
                        />
                    </Route>

                    <Route path='/revisar'>
                        <FinalizeOrder orderList={orderList}/>
                    </Route>
                </Switch>
                
                <Link className={areAllSelected ? '' : 'disable-link'} to='/revisar'>
                    <Footer areAllSelected={areAllSelected}/>
                </Link>
            </Router>

		</>
	)
}


export default App
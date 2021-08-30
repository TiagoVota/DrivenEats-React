import { useHistory } from 'react-router-dom'
import { sectionsData } from './MainContent/SectionsData'

const FinalizeOrder = ({ orderList }) => {
    const createCardList = (cardData) => {
        return cardData.map((order, index) => createCardItem(order, index))
    }

    const createCardItem = ({ dishTitle, totalDishPrice }, index) => {
        return (
            <div key={index} className="order-detail">
                <p>{dishTitle}</p>
                <p>{numberToCurrency(totalDishPrice)}</p>
            </div>
        )
    }

    const createCardData = (orderList) => {
        return orderList.map((order, index) => createItemData(order, index))
        // return orderList.map((order, index) => createItemData({qtd:3, selectedIndex:1}, index))
    }

    const createItemData = ({ qtd, selectedIndex }, index) => {
        const { dishes } = sectionsData[index]
        const { dishTitle, dishPrice } = dishes[selectedIndex]
        const dishPriceNumber = currencyToNumber(dishPrice)
        const totalDishPrice = dishPriceNumber * qtd
        
        return {
            dishTitle: dishTitle,
            totalDishPrice: totalDishPrice
        }
    }


    // É melhor colocar essas duas funções aqui mesmo, dentro da createCardData ou aonde?
    const currencyToNumber = (currency) => {
        currency = currency.replace('R$ ', '')
        currency = currency.replace(',', '.')
        return Number(currency)
    }


    const numberToCurrency = (number) => {
        return number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }


    const cardData = createCardData(orderList)
    const history = useHistory()


    return (
        <div className={`finalize-order-screen`}>
            <div className="finalize-order-menu">
                <p>Confirme seu pedido</p>

                <div className="order-details">
                    {createCardList(cardData)}
                    <div className="order-detail order-detail-total">
                        <p>Total</p>
                        <p>
                            {numberToCurrency(cardData.reduce((total, { totalDishPrice }) => {
                                return total + totalDishPrice
                            }, 0))}
                        </p>
                    </div>
                </div>
                
                <button className="send-order-button">
                    Tudo certo, pode pedir!
                </button>

                <button className="cancel-button" onClick={() => history.push('/')}>
                    Cancelar
                </button>

            </div>
        </div>
    )
}


export default FinalizeOrder
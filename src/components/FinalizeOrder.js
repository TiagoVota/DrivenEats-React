import { useHistory } from 'react-router-dom'
import { sectionsData } from './MainContent/SectionsData'

const FinalizeOrder = ({ orderList }) => {
    // Trabalhar com a lista de itens
    const createCartList = (cartData) => {
        return cartData.map((order, index) => createCartItem(order, index))
    }


    const createCartItem = ({ dishTitle, totalDishPrice }, index) => {
        return (
            <div key={index} className="order-detail">
                <p>{dishTitle}</p>
                <p>{numberToCurrency(totalDishPrice)}</p>
            </div>
        )
    }


    const createCartData = (orderList) => {
        return orderList.map((order, index) => createItemData(order, index))
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


    const currencyToNumber = (currency) => {
        currency = currency.replace('R$ ', '')
        currency = currency.replace(',', '.')
        return Number(currency)
    }


    const numberToCurrency = (number) => {
        return number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }    


    // Criando data
    const cartData = createCartData(orderList)
    const totalValueCurrency = numberToCurrency(cartData.reduce((total, { totalDishPrice }) => {
        return total + totalDishPrice
    }, 0))

    const history = useHistory()


    // Envio para o WhatsApp
    const sendMessageWhatsapp = () => {
        const name = prompt('Qual o seu nome?')
        const address = prompt('Qual o endereço de entrega?')
    
        const textOrder = makeOrderMessage(name, address, cartData)
    
        const whatsappLink = linkToWhatsapp('5547992312249', textOrder)
    
        window.open(whatsappLink)
    }


    const makeOrderMessage = (name, address, cartData) => {
        if (name === null || name === '') {
            name = 'Um fora da lei >.<'
        }
        if (address === null || address === '') {
            address = 'Um lugar fantasma u.u'
        }

        let dishesText = cartData.map(({ dishTitle, totalDishPrice }) => {
            return `\n- *${dishTitle}*: ${numberToCurrency(totalDishPrice)}`
        })
        dishesText = dishesText.reduce((total, value) => total + value, '')
    
        const textOrder = `Olá, gostaria de fazer o pedido:
        ${dishesText}
        *Total*: ${totalValueCurrency}

        *Nome*: ${name}
        *Endereço*: ${address}`.replaceAll('    ', '')
        
        return textOrder
    }
    
    
    const linkToWhatsapp = (restaurantTextNumber, textOrder) => {
        const baseUrl = 'https://wa.me/'
    
        const textUrl = encodeURIComponent(textOrder)
    
        const finalUrl = baseUrl + restaurantTextNumber + '?text=' + textUrl
        
        return finalUrl
    }

    return (
        <div className={`finalize-order-screen`}>
            <div className="finalize-order-menu">
                <p>Confirme seu pedido</p>

                <div className="order-details">
                    {createCartList(cartData)}
                    <div className="order-detail order-detail-total">
                        <p>Total</p>
                        <p>
                            {totalValueCurrency}
                        </p>
                    </div>
                </div>
                
                <button className="send-order-button" onClick={sendMessageWhatsapp}>
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

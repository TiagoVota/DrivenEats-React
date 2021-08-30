import { useState, useEffect } from 'react'


const Footer = ({ orderList }) => {
    const notReadyToFinalizeText = <>Selecione os 3 itens<br/>para fechar o pedido</>
    const readyToFinalizeText = <>Fechar pedido</>

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

    const handleClick = () => {
        if (areAllSelected) {
            
        }
    }
    
    return (
        <div className="footer">
            <button
                className={`ready-to-finalize-button ${areAllSelected ? 'ready-to-finalize-order' : ''}`}
                onclick={handleClick}
            >
                {areAllSelected ? readyToFinalizeText : notReadyToFinalizeText}
            </button>
        </div>
    )
}


export default Footer
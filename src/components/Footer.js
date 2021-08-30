const Footer = ({ areAllSelected }) => {
    const notReadyToFinalizeText = <>Selecione os 3 itens<br/>para fechar o pedido</>
    const readyToFinalizeText = <>Fechar pedido</>
    
    return (
        <div className="footer">
            <button
                className={`ready-to-finalize-button ${areAllSelected ? 'ready-to-finalize-order' : ''}`}
            >
                {areAllSelected ? readyToFinalizeText : notReadyToFinalizeText}
            </button>
        </div>
    )
}


export default Footer
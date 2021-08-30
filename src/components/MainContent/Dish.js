import './style.css'

const Dish = ({ dishIndex, dishData, dishesState }) => {
    const { imgSrc, imgAlt, dishTitle, dishDescription, dishPrice } = dishData
    const [ selectedDish, setSelectedDish ] = dishesState

    const updateSelectedDish = (qtd, index=dishIndex) => {
        setSelectedDish({
            qtd: qtd,
            selectedIndex: index
        })
    }

    const handleClick = () => {
        const { selectedIndex } = selectedDish
        if (selectedIndex === dishIndex) {
            updateSelectedDish(0, -1)
        } else {
            updateSelectedDish(1)
        }
    }

    const addDish = (event) => {
        event.stopPropagation()
        updateSelectedDish(selectedDish.qtd+1)
    }
    
    const removeDish = (event) => {
        event.stopPropagation()
        const { qtd } = selectedDish
        if (qtd > 1) {
            updateSelectedDish(qtd-1)
        } else {
            updateSelectedDish(0, -1)
        }
    }

    return (
        <div
            className={`dish ${dishIndex===selectedDish.selectedIndex ? 'selected-dish' : ''}`}
            onClick={handleClick}
        >

            <img src={imgSrc} alt={imgAlt} />
            <p className="dish-title">{dishTitle}</p>
            <p className="dish-description">{dishDescription}</p>
            <p className="dish-price">{dishPrice}</p>

            <div className='dish-counter'>
                <div className='minus' onClick={removeDish}>-</div>
                <div className='count'>{selectedDish.qtd}</div>
                <div className='plus' onClick={addDish}>+</div>
            </div>
        </div>
    )
}


export default Dish
import { Col, Card, Button, Row } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import useCart from '../../hooks/useCart';


export default function DrinkCard ({ drink }){
    const { handleDrinkIdClick, handleModalClick } = useDrinks();
    const { addToCart } = useCart();
    function handleAddToCart (drink) {
        addToCart(drink)
    }

    return (
        <Col md={3} ld={3} >
            <Card className="mb-4">
                <Card.Img 
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>
                        {drink.strDrink}
                    </Card.Title>
                    <Card.Subtitle>
                        $ {drink.price}
                    </Card.Subtitle>
                    <Row>
                    <Col className="w-100 p-3 mt-2">
                    <Button 
                        variant="primary"
                        className= "w-100 text-uppercase"
                        onClick={() => handleAddToCart(drink)}
                    >
                        Agregar al carrito
                    </Button>
                    <Button 
                        variant="warning"
                        className= "w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleModalClick();
                            handleDrinkIdClick(drink.idDrink)
                        }}>
                        ver receta
                    </Button>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }).isRequired,
};
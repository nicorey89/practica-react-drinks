import { Col, Card, Button } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import PropTypes from 'prop-types';


export default function DrinkCard ({ drink }){
    const { handleDrinkClick, handleModalClick, } = useDrinks();

    return (
        <Col md={6} ld={3} >
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
                    <Button 
                        variant="warning"
                        className= "w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleModalClick();
                            handleDrinkClick(drink.idDrink)
                        }}>
                        ver receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired
    }).isRequired,
};
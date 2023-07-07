import { Row } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';

export default function DrinkList () {
    const { drinks } = useDrinks();
    if(drinks.length === 0) {
        return (
            <Row className="p-5 m-5">
                <h1 className="text-center"> No Hay Recetas</h1>
            </Row>
        )
    }
    return (
        <Row className="mt-5">
        {
            drinks.map((drink) => {
                return(
                    <DrinkCard key={drink.idDrink} drink={drink} />
                )
            })
        }
        </Row>
    )
} 
import { Row } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';
import styles from './DrinkList.module.css'

export default function DrinkList () {
    const { drinks } = useDrinks();
    if(drinks.length === 0) {
        return (
            <Row className="p-5 m-5">
                <h1 className={styles.drinks}> No Hay Bebidas</h1>
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
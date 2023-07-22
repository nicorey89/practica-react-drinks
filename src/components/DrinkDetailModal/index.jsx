import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import styles from "./DrinkDetailModal.module.css"


export default function DrinkDetailModal () {
    const { modal, handleModalClick, recipe, loading } = useDrinks();
    function showIngredients () {
        let ingredients = [];
        for (let index = 1; index < 16; index++) {
            if(recipe[`strIngredient${index}`]) {
                ingredients.push(
                    <li key={index}>
                        {recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]}
                    </li>
                )
            } 
        }
        return ingredients;        

    }
    if(modal)
    return (
        !loading && (
          <div className={styles.articleBg}>
            <article className={styles.article}>
              <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={handleModalClick}/>
              <h1 className={styles.titulo}>
              {recipe.strDrink}
              </h1>
              <div className={styles.modal}>
              <div className={styles.imagen}>
              <img
                src={recipe.strDrinkThumb}
                alt={`Imagen receta ${recipe.strDrink}`}
                />
                <div className={styles.instrucciones}>
                  <h2>Instrucciones</h2>
                  <p>{recipe.strInstructions}</p>
                </div>
              </div>
              <div>
              <Modal.Body>
                <div className={styles.instrucciones2}>
                  <h2>Ingredientes y Cantidad</h2>
                  {showIngredients()}
                </div>
              </Modal.Body>
              </div>
              </div>
            </article>
          </div>
        )
    )
}
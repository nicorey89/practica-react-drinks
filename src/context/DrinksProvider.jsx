import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { getRecipeService, filterDrinksService } from "../services/drink.service";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [ drinks, setDrinks ] = useState([]);
    const [ modal, setModal ] = useState(false);
    const [ drinkId, setDrinkId ] = useState(null);
    const [ recipe, setRecipe ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const hundleModalClick = () => {
        setModal(!modal)
    }
    const hundleDrinkIdClick = (id) => {
        setDrinkId(id)
    }
    const getRecipe = async () => {
        if(!drinkId) return;
        try {
            setLoading(true);
            const recipeData = await getRecipeService(drinkId);
            setRecipe(recipeData)
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }

    }
    const getDrink = async (data) => {
        try {
            setLoading(true);
            const drinksData = await filterDrinksService(data.name, data.category);
            setDrinks(drinksData);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }

    }
    
    useEffect(() => {
        getRecipe();
    }, [drinkId]);

    const contextValues = {
        drinks,
        modal,
        recipe,
        loading,
        hundleDrinkIdClick,
        hundleModalClick,
        getDrink,
    }

    return(
        <DrinksContext.Provider value={contextValues}>
            {children}
        </DrinksContext.Provider>
    )

}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { DrinksContext, DrinksProvider};
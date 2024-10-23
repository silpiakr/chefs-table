import { useEffect, useState } from 'react';

const Recipes = ({handleCookRecipe}) => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        fetch('../../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='md:w-2/3'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                recipes.map(recipe => (<div key={recipe.recipe_id} className="card bg-base-100 border-2">
                    <figure className=' px-8 pt-6'>
                        <img className='w-full rounded-xl md:h-52'
                            src={recipe.recipe_img}
                            alt="recipe_img" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg font-semibold text-left text-gray-800">{recipe.recipe_name}</h2>
                        <p className='text-left text-gray-600 border-b pb-3'>{recipe.short_description}</p>
                        <h3 className='text-left font-semibold text-lg'>Ingredients: {recipe.ingredients.length}</h3>
                        <ul className='border-b pb-3 ml-8'>
                            {
                                recipe.ingredients.map((item, idx) => <li className='text-left list-disc' key={idx}>{item}</li>)
                            }
                        </ul>
                        <div className='flex justify-between items-center py-4'>
                            <div className='flex items-center gap-3'>
                            <i className="fa-regular fa-clock text-2xl"></i>
                            <p>{recipe.preparing_time} minutes</p>
                            </div>
                            <div className='flex items-center gap-3'>
                            <i className="fa-solid fa-fire text-2xl"></i>
                            <p>{recipe.calories}  calories</p>
                            </div>
                        </div>
                        <div className="card-actions justify-left">
                            <button onClick={() => handleCookRecipe(recipe)} className="btn bg-green-400 px-6 text-xl font-semibold rounded-full">Want to Cook</button>
                        </div>
                    </div>
                </div>))
            }
            </div>
        </div>
        
    );
};

export default Recipes;
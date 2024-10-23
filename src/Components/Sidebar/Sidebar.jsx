
const Sidebar = ({cookRecipe}) => {
    return (
        <div className='md:w-1/3'>
            <h3>Want to Cook: {cookRecipe.length}</h3>
        </div>
    );
};

export default Sidebar;
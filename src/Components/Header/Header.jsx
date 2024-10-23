
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
            <h2 className="text-gray-800 font-bold text-3xl">Chef&apos;s Table</h2>
            <ul className="flex gap-6 text-gray-600 font-semibold text-base ">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
            </ul>
            <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex justify-between items-center relative">
                    <input
                        className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray-800 outline-none" 
                        type="text"
                        placeholder="Search"
                    />
                    <div className="flex items-center justify-center absolute inset-y-0 -left-1 pl-4 text-2xl">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
                <i class="fa-regular fa-circle-user text-3xl"></i>
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {

}
export default Header;


function Cards({ item }) {
    return (
        <div className="card bg-white shadow-md w-[280px] mt-4 mb-5 mx-auto transition-transform duration-500 hover:scale-105  cursor-pointer">
            <figure>
                <img src={item.image} alt={item.title} className="w-full md:h-90 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-between">
                    <span className="text-xl font-medium">{`${item.price} $`}</span>
                    <button className="btn bg-red-500 text-white text-xl  border-black border-[0.5px] hover:bg-red-700 duration-200 px-7 py-4 rounded-bl-md">{item.category}</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;



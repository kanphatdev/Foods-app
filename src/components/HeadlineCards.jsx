const HeadlineCards = () => {
    const cardData = [
        {
            id:1,
            name: 'sun out, bogo out ',
            description: 'through 8/26',
            imageUrl: 'https://images.unsplash.com/photo-1645687200989-7f94601cba33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


        },
        {
            id: 2,
            name: 'new restaurant',
            description: 'added daily',
            imageUrl: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYWhhd2t8ZW58MHx8MHx8fDA%3D'

        },
        {
            id: 3,
            name: 'we deliver desserts too',
            description: 'tasty treat',
            imageUrl: 'https://images.unsplash.com/photo-1542310503-ff8da9c02372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlYXR8ZW58MHx8MHx8fDA%3D'

        }
    ]
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 place-content-center">
            {cardData.map((card) => (
                <>
                    <div className="card w-96 bg-base-100 shadow-xl" key={card.id}>
                        <figure><img src={card.imageUrl} alt="/" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl capitalize text-yellow-600 font-bold ">
                                {card.name}
                            </h2>
                            <p className="capitalize text-orange-600 font-bold">
                                {card.description}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white bg-orange-500 ">Order Now</button>
                            </div>
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default HeadlineCards
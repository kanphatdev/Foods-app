import { Data, priceMenu, typeMenu } from "../data/data"
import { useState } from "react"


const Food = () => {
  const [foods, setFoods] = useState(Data);
  const filterType = (category) => {
    setFoods(
      Data.filter((item) => {
        return item.category === category
      })
    )
  }
  const filterPrice = (price) => {
    setFoods(
      Data.filter((item) => {
        return item.currency === price
      })
    )
  }
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-4xl capitalize font-bold text-center text-orange-600">
        top rated <span className="text-yellow-500">food menu</span>
      </h1>
      <div className=" ">
        <div className=" p-4 my-2 rounded-lg shadow-lg">
          <p className="capitalize text-2xl text-orange-500 font-bold">filter <span className="text-yellow-500">type</span></p>
          <div className="flex justify-between flex-wrap">
            <button className="capitalize badge badge-outline text-lg font-bold px-6 py-4 text-orange-500 border-yellow-500 m-1" onClick={() => setFoods(Data)}>all</button>
            <button onClick={() => filterType('Sushi')} className="capitalize badge badge-outline text-lg font-bold px-6 py-4 text-orange-500 border-yellow-500 m-1">Sushi</button>
            <button onClick={() => filterType('Pizza')} className="capitalize badge badge-outline text-lg font-bold px-6 py-4 text-orange-500 border-yellow-500 m-1">Pizza</button>
            <button onClick={() => filterType('Steak')} className="capitalize badge badge-outline text-lg font-bold px-6 py-4 text-orange-500 border-yellow-500 m-1">Steak</button>
            <button onClick={() => filterType('Burgers')} className="capitalize badge badge-outline text-lg font-bold px-6 py-4 text-orange-500 border-yellow-500 m-1">Burgers</button>
          </div>
        </div>
        <div className=" p-8 my-4 rounded-lg shadow-lg">
          <p className="capitalize text-2xl text-orange-500 font-bold">
            filter <span className="text-yellow-500">price</span>
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            {Data.map((price) => (
              <>
                   <button onClick={() => filterPrice(price.currency)} className="capitalize badge badge-outline text-lg font-bold  text-emerald-500 border-yellow-500 m-1" key={price.id}>
                    {price.price}
                    </button>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* display Foods cards */}
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-4 place-content-center" >
        {foods.map((item, index) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-300" key={index}>
              <figure ><img src={item.imageUrl} alt={item.name} className="object-cover h-[200px] w-full" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}

                </h2>
                <p>
                  {item.description}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {item.category}
                  </div>
                  <div className="badge badge-outline">{item.price} ฿</div>
                </div>
              </div>
            </div>

          </>
        ))}
      </div>
    </div>
  )
}

export default Food
function App() {

  return (
    <div className='w-screen h-full bg-[--bg] flex justify-center items-center'>
      <div className='w-[650px] my-4 border bg-white rounded-xl flex flex-col items-center'>
        <img className='w-[500px] my-5 rounded-xl' src="./assets/images/image-omelette.jpeg" alt="" />
        <div className='w-[500px] mb-5'>
          <h1 className='text-3xl my-5 font-bold'>Simple Omelette Recipe</h1>
          <p className='text-sm'>An easy and quick dish, perfect for any meal. This classic omellete combines beaten eggs cooked
            to perfection, optionally filled with your chouice of cheese, vegetables or meats.
          </p>
        </div>

        <div className='w-[500px] bg-[#fff7fc] py-2  rounded-xl'>
          <p className='px-3 text-[#9c416a] font-extrabold'>Preperation time</p>
          <ul className='list-disc px-8 my-2'>
            <li><span className='font-bold'>Total:</span> Approximately 10 minutes</li>
            <li className='mt-2'><span className='font-bold'>Preparation</span> 5 minutes</li>
            <li className='my-2'><span className='font-bold'>Cooking</span> 5 minutes</li>
          </ul>
        </div>

        <div className="border w-[500px] h-[2px] bg-black mt-8"></div>

        <div className='w-[500px] text-amber-800'>
          <h3 className='y-5 text-3xl my-5'>Ingredients</h3>
          <ul className='list-disc px-5'>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <div className="border w-[500px] h-[2px] bg-black mt-8"></div>
        
        <div className='w-[500px] text-amber-800'>
          <h3 className='y-5 text-3xl my-5'>Instructions</h3>
          <ol className='list-decimal px-5'>
            <li className='px-4'>2-3 large eggs</li>
            <li className='px-4'>Salt, to taste</li>
            <li className='px-4'>Pepper, to taste</li>
            <li className='px-4'>1 tablespoon of butter or oil</li>
            <li className='px-4'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ol>
        </div>

        <div className="border w-[500px] h-[2px] bg-black mt-8"></div>

        <div className='w-[500px] text-amber-800'>
          <h3 className='y-5 text-3xl my-5'>Nutrition</h3>
          <table className="">
            <tr className="my-2">
              <td>Calories</td>
              <td>273kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>22g</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}

export default App

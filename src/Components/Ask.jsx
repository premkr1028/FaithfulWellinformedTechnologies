export default function Ask({swapYes}){
 
  return(
    <div className="flex justify-center items-center flex-col text-center">
    <h2 className="text-2xl">Megha</h2>
      <p className="text-[20px]">Actually, I wanna tell you something...</p>
      <p className="text-wheat/50">Would you like to hear yaa fir watch it?</p>
      <div id="btns" className="mt-[10px] flex gap-[15px]">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={swapYes}>
        <span class="relative px-5 py-[5px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        yes!
        </span>
        </button>
        <button onClick={swapYes} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-[5px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Haan be chutiye!
        </span>
        </button>
      </div>
    </div>
  )
}

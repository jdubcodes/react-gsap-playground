const MobileButton = ({ handleClick, isOpen }) => {
  return (
    <button
      onClick={handleClick}
      className='flex flex-col justify-center items-center absolute right-20 top-10 z-50'
    >
      <span
        className={`bg-menu-item block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? 'rotate-45 translate-y-1.5'
                          : '-translate-y-0.5'
                      }`}
      ></span>
      <span
        className={`bg-menu-item block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-1 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
      ></span>
      <span
        className={`bg-menu-item block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? '-rotate-45 -translate-y-1.5'
                          : 'translate-y-0.5'
                      }`}
      ></span>
    </button>
  )
}

export default MobileButton

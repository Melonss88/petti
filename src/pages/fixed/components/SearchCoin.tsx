import { useState } from 'react'
import SearchInput from './SearchInput'
import { createPortal } from 'react-dom'

const SearchCoin = () => {
  const [showInput, setShowInput] = useState(false)

  return (
    <>
      <section
        className="flex items-center cursor-pointer"
        onClick={() => setShowInput(true)}
      >
        <svg
          className="mr-[10px] ml-[32px]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
          />
        </svg>
        搜索
      </section>

      {showInput &&
        createPortal(
            <div className="h-[82px] fixed top-0 left-0 right-0 z-[2001] bg-white shadow-md flex justify-center items-center border-b border-gray-100">
              <div className="w-full max-w-4xl flex items-center">
                <SearchInput />
                <span
                    className='absolute right-[15%] cursor-pointer'
                    onClick={() => setShowInput(false)}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 16 16">
                        <path fill="currentColor" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
              </div>
            </div>,
            document.body
          )
        }
    </>
  )
}

export default SearchCoin

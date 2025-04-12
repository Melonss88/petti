import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import productInfos from '@/config/products' 

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const navigate = useNavigate()

  const allProducts = productInfos()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value.trim() === '') {
      setFilteredProducts([])
      return
    }

    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredProducts(results)
  }

  const handleSelect = (id: string) => {
    setQuery('')
    setFilteredProducts([])
    navigate(`/detail?id=${id}`)
    // window.location.reload()
    // window.location.replace(`/petti/detail?id=${id}`)
  }

  return (
    <section className='w-full'>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="尽情搜索你想要的产品吧"
          value={query}
          onChange={handleChange}
          className="h-[40px] text-[14px] pl-[40px] pr-[15px] w-full rounded-full bg-gray-50 focus:outline-none "
        />
        <svg
              className="absolute left-[15px] top-[10px] h-[20px] text-gray-400"
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

        {filteredProducts.length > 0 && (
          <ul className="absolute z-10 w-full py-[15px] px-[10px] rounded-2xl mt-[15px] bg-[#fff] border border-solid border-[#bcbbbb]">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="text-[15px] cursor-pointer px-[20px] py-[8px] hover:bg-[#dcdbdb]"
                onClick={() => handleSelect(product.id)}
              >
                {product.title}（{product.id}）
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default SearchInput

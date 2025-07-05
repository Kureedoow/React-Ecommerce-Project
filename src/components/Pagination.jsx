import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from 'react-icons/tfi';
import { FaShoppingCart } from 'react-icons/fa';
function Items({ currentItems }) {
  return (
  <div className='flex gap-12 flex-wrap'>
  {currentItems && currentItems.map((item) => (
    <div key={item.id} className="w-[370px]">
      
      {/* Product Image + Hover Card */}
      <div className="relative group overflow-hidden bg-white shadow rounded h-[400px]">
        <img className="w-full h-full object-cover rounded" src={item.thumbnail} alt="" />

        {/* Hover Action Panel */}
        <div className='
          absolute bottom-0 left-0 w-full h-[150px] bg-amber-600 
          opacity-0 translate-y-full transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:translate-y-0
        '>
          <ul className='flex-col flex items-end px-[20px] py-4 gap-y-4 font-dm font-bold text-sm text-white'>
            <li>Add to watch list <IoIosHeart className='inline ml-4' /></li>
            <li>Compare <TfiReload className='inline ml-6' /></li>
            <li>Add to cart <FaShoppingCart className='inline ml-4' /></li>
          </ul>
        </div>

        {/* "New" Badge */}
        <button className="bg-black py-2 px-6 text-white font-dm rounded absolute top-4 left-4 z-10">
          New
        </button>
      </div>

      {/* Product Info BELOW the hover box */}
      <div className="mt-4 px-1">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-dm font-bold">{item.title}</h1>
          <p className="text-lg font-semibold">${item.price}</p>
        </div>
        <p className="font-dm font-medium text-gray-700">Black</p>
      </div>
    </div>
  ))}
</div>

  );
}

function Pagination({ itemsPerPage = 36 }) {
  const [fetchdata, setfetchdata] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function  fetchdata() {
      const product = await axios.get("https://dummyjson.com/products");
      setfetchdata(product.data.products);
    }
    fetchdata();
  }, []);

  // ✅ Reset itemOffset when itemsPerPage changes
  useEffect(() => {
    setItemOffset(0);
  }, [itemsPerPage]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = fetchdata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(fetchdata.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fetchdata.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='flex items-center justify-between'>
        <div className='mt-[50px]'>
          <ReactPaginate
            breakLabel="....."
            nextLabel=">"
            previousLabel="<"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName='flex'
            pageLinkClassName='py-3 px-5 rounded bg-black text-white mr-5'
          />
        </div>
        <h1 className='pt-5 text-black font-bold font-dm'>
          Products from {itemOffset + 1} to {Math.min(endOffset, fetchdata.length)} of {fetchdata.length}
        </h1>
      </div>
    </>
  );
}

export default Pagination;

import React, { useState } from 'react'
import SearchForm from '../Components/SearchForm'
import SingleItem from '../Components/SingleItem'
function SearchPage() {
   
   const [datas, setDatas] = useState([])
    return (
        <div className="searchpage">
        <SearchForm setDatas={setDatas}/>
        <div className="search_result">
    {datas.map((data,index)=>(<SingleItem key={index} product={data}/>))}
        </div></div>
    )
}

export default SearchPage

import { Search } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react'
import '../Css/Searchform.css'
function SearchForm({setDatas}) {
const [keyword, setKeyword] = useState('')
    const handleSearch=(e)=>{
e.preventDefault();
axios.post('http://localhost:4000/search',{keyword}).then((response)=>{
    console.log(response.data);
setDatas(response.data)
})

    }
    return (
        <div className="search_form_wrapper">
            <form className="search_form" onSubmit={handleSearch}>
<input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>

<button className="search_button"><Search/></button>
            </form>
        </div>
    )
}

export default SearchForm

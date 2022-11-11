import {useEffect, useState} from 'react'
import {get} from "./services/service.js";
import CardCat from "./components/card.jsx"
import BasicSelect from "./components/select.jsx";
import {Container} from "@mui/material";
import "./App.css"
function App() {

    const [catList, setCatsList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState("5")
    const [image, setImage] = useState([])
    const getCat = async () =>{
        const cats = await get(`https://api.thecatapi.com/v1/breeds?limit=12`)
        console.log(cats)
        setCatsList(cats)
    }

    const getCategory = async () => {
        const categories = await get(`https://api.thecatapi.com/v1/categories/`)
        console.log(categories)
        setCategoryList(categories)
        await getImage(category)
    }

    const getImage = async (category) => {
        const query_params = {
            order:"Desc",
            limit: 3,
            category_id: category
        }
        console.log(category)
        const images = await fetch(`https://api.thecatapi.com/v1/images/search`, { params: query_params })
        const result = await images.json()
        console.log(result)
        setImage(result)

    }
    const handleChange = (event) => {
        setCategory(event.target.value);
        getImage(event.target.value);
    };
    useEffect(() => {
        getCat();
        getCategory();
    },[])
  return (
      <Container>
          <BasicSelect categories={categoryList} handleChange={handleChange} category={category} image={image}/>
          <CardCat cats={catList}/>
      </Container>
  )
}

export default App

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({}) => {


    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo*/}

            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/* Listado de Gif */}
        
            { 
                categories.map((category, index) => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
                ) 
            }
            
                {/* Gif Item */}
        </>
    )

}
export const GETALL_FOOD ="GETALL_FOOD";
export const SEARCH_FOOD ="SEARCH_FOOD"



export const getAllFood=(food)=>{
    return{
        type:GETALL_FOOD,
        payload:food
    }
}
export const SearchFood = (food) => {
    return {
      type: SEARCH_FOOD,
      payload:food
    };
  };
export const fetchAllFood =()=>
{
    return(dispatch)=>{
        const getData =async()=>{
            try{
                const response = await fetch('http://localhost:9001/foods');
                const food = await response.json();
                console.log('foods:',food)

                dispatch(getAllFood(food));
            }catch(err){
                console.log(err)
            }
        };
        getData();

     }
}
export const fetchSearchFood=(key)=>{
    return (dispatch)=>{
      const getData = async () => {
        try {
            const response = await fetch(`http://localhost:9001/food/${key}`);
            const cate = await response.json();
            // console.log(books)
            dispatch(SearchFood(cate))
        } catch (err) {
            console.error(err);
        }
    };
    getData();
    }
  }
import axios from "axios";

const AddDrawing = () => {
  const handleClick = async()=>{
    try{
      const res = await axios.get('/api/v1/newDrawing');
      console.log(`Response data: ${res.data}`)
      alert(res.data.message || "Page loaded");
    }
    catch(error){
      console.log(`Error message: ${res.data.message}`)
      alert(res.data.message || "Page not found");
    }
  }
  return (
    <div className="flex justify-end sm:justify-end px-4 sm:px-10 pt-6 sm:pt-10">
      <button 
      className="text-white font-semibold bg-pink-500 rounded-md shadow-lg hover:bg-pink-600 px-4 py-2"
      onClick={handleClick}>
        Add New Drawing
      </button>
    </div>
  );
};

export default AddDrawing;

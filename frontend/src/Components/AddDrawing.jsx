import {useNavigate} from 'react-router-dom';

const AddDrawing = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/newDrawing')
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

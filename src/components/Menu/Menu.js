import React from 'react';

function Menu(props) {
  const pdfUrl = props.source;
  const handleFoodClick =() =>{
    window.location.hash = '#FOOD'
}
const handleAmbClick =() =>{
    window.location.hash = '#AMB'
}
const handleMenClick =() =>{
    window.location.hash = '#MENU'
}

  return (
    <div className='food' id="MENU">
    <div className='food_header'>
        <div className='food_text'>Menu</div>
        <div className='food-buttons'>
            <button onClick={handleFoodClick}>Food</button>
            <button onClick={handleAmbClick}>Ambience</button>
            <button onClick={handleMenClick}>Menu</button>
        </div>
    </div>
    <hr className='food-line'/>
    <div className="border border-zinc-400 h-fit w-full mt-4 p-4 rounded-lg">
        {/* PDF Viewer */}
        <div className="w-full h-[600px] border-zinc-300 border rounded-lg overflow-hidden">
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
            style={{ overflow: 'hidden' }}















            // Ignore the styling , that will be done eventually , the overall working function has been created , thank you 
            
          />
        </div>
      </div>
</div>

     
  );
}

export default Menu;

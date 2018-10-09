import  React  from  'react';




const  GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
        <button  onClick={selectSimpson}>RANDOMSIMPSON</button>
        </div>
    );
};

export  default  GenerateSimpson;
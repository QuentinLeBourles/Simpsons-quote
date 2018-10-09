import  React  from  'react';


const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt="picture"  />
            <ul>
                <li>Quote : {simpson.quote}</li>
                <li>
                    Name : {simpson.character}
                </li>
                <li> Character Direction: {simpson.characterDirection} </li>
                <li>
                    
                </li>
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;
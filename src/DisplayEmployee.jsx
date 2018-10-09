import  React  from  'react';

const  sampleEmployee = {
    gender:  'male',
    name: {
        title:  'mr',
        first:  'mathys',
        last:  'aubert'
    },
    location: {
        street:  '9467 rue gasparin',
        city:  'perpignan',
        postcode:  '90208'
    },
    email:  'mathys.aubert@example.com',
    picture: {
        medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
    }
};

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.picture.medium}  alt="picture"  />
            <ul>
                <li>Gender : {employee.gender}</li>
                <li>
                    Name : {employee.name.title}  {employee.name.last}{' '}
                    {employee.name.first}
                </li>
                <li>E-mail : {employee.email}</li>
                <li>
                    Location : {employee.location.street},
                    {employee.location.postcode}{' '}{employee.location.city}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;
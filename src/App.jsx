import React, {useEffect, useState} from 'react';

const App = () => {
    const [usersList, setUsersList] = useState([])
    const [carsList, setCarsList] = useState([])

    const handleDelete = (id) => {
        setUsersList(usersList.filter(el => el.id !== id))
    }

    const handleDeleteCar = (id) => {
        setCarsList(carsList.filter(el => el.id !== id))
    }


    return (
        <div>
            {
                usersList.map(el =>
                <div
                style={{}}>

                </div>
            )}
        </div>
    );
};

const users = [
    {
        id: 1,
        name: 'leanne Graham',
        city: 'Dubai'

    },
    {
        id: 2,
        name: 'Ervin Howell',
        city: 'NY'
    }
]
export default App;
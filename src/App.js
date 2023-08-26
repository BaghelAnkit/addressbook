import React, {useState} from 'react';
import './App.css';

function App() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');
    const [pin, setpin] = useState('');
    const [landmark, setlandmark] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        
        console.info('firstname: ', firstname)
        console.info('lastname: ', lastname)
        console.info('address: ', address)
        console.info('city: ', city)
        console.info('state: ', state)
        console.info('country: ', country)
        console.info('pin: ', pin)
        console.info('landmark: ', landmark)
        console.info('mobilenumber: ', mobilenumber)


    }

    return (<div className='Todo_list' >
        <h1 > what 's your today todo</h1>
        <form className="Todo_form" onSubmit={handleSubmit} >
            <div>
                <label>first name</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={firstname}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setfirstname(e.target.value)}
                />
            </div>

            <div>
                <label>last name</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={lastname}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setlastname(e.target.value)}
                />
            </div>
            <div>
                <label>mobile number</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={mobilenumber}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setmobilenumber(e.target.value)}
                />
            </div>
            <div>
                <label>city</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={city}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setcity(e.target.value)}
                />
            </div>
            <div>
                <label>state</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={state}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setstate(e.target.value)}
                />
            </div>
            <div>
                <label>county</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={country}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setcountry(e.target.value)}
                />
            </div>
            <div>
                <label>pin</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={pin}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setpin(e.target.value)}
                />
            </div>
            <div>
                <label>address</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={address}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setaddress(e.target.value)}
                />
            </div>
            <div>
                <label>landmark</label>
                <input
                    type='text'
                    placeholder='add a todo'
                    value={landmark}
                    name="text"
                    className='Todo input'
                    onChange={(e) => setlandmark(e.target.value)}
                />
            </div>


            <button className='Todo-button'>Add todo</button>
        </form>
    </div >
    );
}

export default App
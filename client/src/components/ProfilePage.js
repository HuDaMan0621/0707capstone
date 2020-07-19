import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import Service from './Service';

export default function ProfilePage(props) {
    const [data2, setData2] = useState({ error: " " }); //this is the state for the customer
    const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks
    useEffect(() => {
        fetch(`/api/v1/customer/profile`)
            .then((data) => data.json())
            .then((data) => {
                setData2(data);
                setIsLoading(false);
            })
            .catch((error) => console.log("Please Login"));
    }, []);

    return (
        <div>
            {data2.error ? <div>User Not Authorized. <br />Please <Link to="/login">log in</Link></div> : (
                <div>
                    {data2.data.id && <QRCode value={`http://localhost:3000/customer/${data2.data.id}/showcase`} />}
                    <h1>Profile Page!!!!!!</h1>
                    <h1>{data2.data.first_name}</h1>
                    {/* <h1>{data.last_name}</h1> */}
                    <form onSubmit={e => {
                        e.preventDefault();
                    }}>
                        <Logout />
                    </form>
                    <Link to='/booking'>Book Service</Link>
                    {/* <Link to={`http://localhost:3000/customer/${data2.data.id}/showcase`}>
                        Showcase
                    </Link> */}
                    <Link to="/showcase">the real showcase</Link>
                    <div>
                    </div>
                </div>
            )}
            <Service />
        </div>
    );
}

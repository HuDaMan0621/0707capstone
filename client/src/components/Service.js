import React, { useEffect, useState } from 'react';

export default function Service() {
    const [serviceInfo, setServiceInfo] = useState([]);


    useEffect(() => {
        fetch(`/api/v1/customer/services`)
            .then(data => data.json())
            .then(data => {
                setServiceInfo(data)
            })
            .catch (error => console.log('Please Login')          
            )
    },[])

    return (
        <div>
            {serviceInfo.map(((service, i) => {
                return (
                    <div key={i}> 
                        <p><span>{service.nick_name}</span>{service.sq_ft}<span>{service.address}</span><br/></p>
                    </div>

                )
            }))}
        </div>
    )
}

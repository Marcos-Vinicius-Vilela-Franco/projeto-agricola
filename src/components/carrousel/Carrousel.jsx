import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
export default function Carrosel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/hello').then((resp) =>
            resp.json()).then(setData)
    }, [])
    if (!data || !data.length) return null;
    return (
        <>
            <div className="display-4 p-2 border-bottom mb-5">Imagens</div>
            <div className='container bg-light  rounded d-flex align-items-center justify-content-center'>
                <div className='mb-5 mt-3'>

                    <Carousel>
                        {data.map((item) => {
                            return (
                                <Carousel.Item key={item.id} >
                                    < Image className="d-block w-100 " src={item.link} alt={item.name} width={1100} height={600} />
                                    <Carousel.Caption>
                                        <h2 className='font-weight-bold'>{item.label}</h2>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </>

    )
}

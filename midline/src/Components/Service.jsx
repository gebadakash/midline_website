import { FaCheck } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Service = ({serviceItems}) => {

  const {ServiceTitle} = useGlobalContext();

    return (
        <div className='mt-5'>
            <div className="container-fluid py-5"  style={{backgroundImage: 'url(images/bannew.jpg)', backgroundSize: 'cover'}}>
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" data-aos="zoom-in" data-aos-delay="500" style={{maxWidth: '600px'}}>
                    <h1 className="mb-0 text-center text-white">{ServiceTitle}</h1>
                </div>
                <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200">
                    <div className="row g-0 mb-3 justify-content-center" style={{textAlign: 'justify'}}>
                        {serviceItems.map((item, index) => (
                            <div key={index} className="col-sm-10" style={{visibility: 'visible'}}>
                                <h6 className="mb-3 text-white"><FaCheck className="text-warning me-3" />{item.text}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

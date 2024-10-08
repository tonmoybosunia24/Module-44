import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
       const {name, price, features} = option
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-center text-white space-y-2'>
            <h2>
              <span className='text-3xl'>{price}</span>
              <span>/Mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='flex-grow'>
            {
              features.map((feature, idx) => <Feature key={idx} feature = {feature}></Feature>)
            }
            </div>
            <button className='btn'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;

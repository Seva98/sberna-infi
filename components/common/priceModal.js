import Image from 'next/image';
import CrossIcon from '../icons/crossIcon';

const PriceModal = ({ onClose }) => {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.75)' }} onClick={() => onClose()}>
      <div style={{ position: 'absolute', textAlign: 'right', paddingRight: '10px', width: '100%', color: 'white', fontSize: '24px' }}>
        <CrossIcon />
      </div>
      <div className="row" style={{ height: '100%', alignContent: 'center' }}>
        <div className="col-12 text-center">
          <Image
            src={'/assets/images/banner-cena.png'}
            width={640}
            height={571}
            alt={'cenove promo'}
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/assets/images/banner-cena-blur.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceModal;

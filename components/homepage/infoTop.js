import FavoritePrices from './favoritePrices';
import OpeningHours from './openingHours';
import QuickContacts from './quickContacts';

const InfoTop = ({ materials }) => {
  return (
    <div className="row" style={{ justifyContent: 'center' }}>
      {/* <OpeningHours /> */}
      <FavoritePrices materials={materials} />
    </div>
  );
};

export default InfoTop;

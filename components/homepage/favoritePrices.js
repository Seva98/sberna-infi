import ShortInfo from '../common/shortInfo';
import PriceIcon from '../icons/priceIcon';
import { useRouter } from 'next/router';

const FavoritePrices = ({ materials }) => {
  const router = useRouter();
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');

  return (
    <ShortInfo icon={<PriceIcon className="mb-4" />} title={isEn() ? `Current Price List` : `Aktuální ceny`}>
      <table className="table">
        <tbody>
          {materials &&
            materials.map(({ name, prices, unit }) => (
              <tr key={name}>
                <th>{name}</th>
                <td>
                  {prices[prices.length - 1].price} {unit}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="btn theme-btn-ghost w-100 mb-2" onClick={() => router.push('/cenik')}>
        {isEn() ? 'Complete Price List' : 'Kompletní ceník'}
      </button>
    </ShortInfo>
  );
};

export default FavoritePrices;

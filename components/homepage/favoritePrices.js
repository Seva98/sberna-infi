import ShortInfo from '../common/shortInfo';
import PriceIcon from '../icons/priceIcon';
import { useRouter } from 'next/router';
import { matsTranslated } from '../prices/materialsTable';

const FavoritePrices = ({ materials }) => {
  const router = useRouter();
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  const translateMaterial = (material, key) => {
    const found = matsTranslated.find(({ cz }) => cz === material.name);
    return found && isEn() ? found[key] : key === 'en' ? material.name : material.description;
  };

  return (
    <ShortInfo icon={<PriceIcon className="mb-4" />} title={isEn() ? `Current Price List` : `Aktuální ceny`}>
      <table className="table">
        <tbody>
          {materials &&
            materials.map((material) => (
              <tr key={material.name}>
                <th>{translateMaterial(material, 'en')}</th>
                <td>
                  {material.prices[material.prices.length - 1].price} {material.unit}
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

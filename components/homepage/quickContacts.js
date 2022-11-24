import ShortInfo from '../common/shortInfo';
import PhoneIcon from '../icons/phoneIcon';
import Image from 'next/image';

const QuickContacts = () => {
  return (
    <>
      <ShortInfo icon={<PhoneIcon className="mb-4" />} title="Rychlý kontakt">
        <h5>Sběrna Krmelín</h5>
        <table className="table">
          <tbody>
            <tr>
              <th>Tel.</th>
              <td>
                <a href="tel:721180812">+420 721 180 812</a>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:info@sbernakrmelin.cz">info@sbernakrmelin.cz</a>
              </td>
            </tr>
          </tbody>
        </table>
        <h5>Sběrna Havířov</h5>
        <table className="table">
          <tbody>
            <tr>
              <th>Tel.</th>
              <td>
                <a href="tel:733488556">+420 733 488 556</a>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:info@sbernahavirov.cz">info@sbernahavirov.cz</a>
              </td>
            </tr>
          </tbody>
        </table>
      </ShortInfo>
    </>
  );
};

export default QuickContacts;

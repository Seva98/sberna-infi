import ShortInfo from '../common/shortInfo';
import PhoneIcon from '../icons/phoneIcon';

const QuickContacts = () => {
  return (
    <ShortInfo icon={<PhoneIcon className="mb-4" />} title="Rychlý kontakt">
      <table className="table">
        <tbody>
          <tr>
            <th>Tel.</th>
            <td>
              <a href="tel:736642927">+420 721 180 812</a>
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
    </ShortInfo>
  );
};

export default QuickContacts;

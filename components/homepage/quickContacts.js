import ShortInfo from '../common/shortInfo';
import PhoneIcon from '../icons/phoneIcon';
import Image from 'next/image';

const QuickContacts = () => {
  return (
    <>
      <ShortInfo icon={<PhoneIcon className="mb-4" />} title="Rychlý kontakt">
        <table className="table">
          <tbody>
            <tr>
              <th>Tel.</th>
              <td>
                <a href="tel:736642927">+420 736 642 927</a>
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
        <a href="https://play.google.com/store/apps/details?id=com.sevcikdev.sbernakrmelin" target="_blank" rel="noreferrer">
          <Image src="/assets/images/google-play.svg" width={256} height={80} alt="Google play app" />
        </a>
      </ShortInfo>
    </>
  );
};

export default QuickContacts;

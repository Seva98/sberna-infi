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
                <a href="tel:733488556">+420 733 488 556</a>
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
        <a href="https://apps.apple.com/cz/app/cen%C3%ADk-kovu/id1603506834?l=cs" target="_blank" rel="noreferrer">
          <Image src="/assets/images/appstore.svg" width={256} height={80} alt="Google play app" />
        </a>
      </ShortInfo>
    </>
  );
};

export default QuickContacts;

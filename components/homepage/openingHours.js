import ClockIcon from '../icons/clockIcon';
import ShortInfo from '../common/shortInfo';
import Image from 'next/image';

const OpeningHours = () => {
  return (
    <ShortInfo icon={<ClockIcon className="mb-4" />} title="Mobilní aplikace">
      <a href="https://play.google.com/store/apps/details?id=com.sevcikdev.sbernakrmelin" target="_blank" rel="noreferrer">
        <Image src="/assets/images/google-play.svg" width={256} height={80} alt="Google play app" />
      </a>
      <a href="https://apps.apple.com/cz/app/cen%C3%ADk-kovu/id1603506834?l=cs" target="_blank" rel="noreferrer">
        <Image src="/assets/images/appstore.svg" width={256} height={80} alt="Google play app" />
      </a>
    </ShortInfo>
  );
};

export default OpeningHours;

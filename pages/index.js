import Layout from '../components/common/layout';
import { connectToDatabase } from '../lib/mongodb';
import InfoTop from '../components/homepage/infoTop';
import InfoBottom from '../components/homepage/infoBottom';
import Rema from '../components/homepage/rema';
import ReviewsCarousel from '../components/homepage/reviewsCarousel';
import GoogleMap from '../components/homepage/googleMap';
import GoogleMapHavirov from '../components/homepage/googleMapHavirov';
import News from '../components/homepage/news';
import Image from 'next/image';
import viking from '../assets/images/logo-viking.png';
import sbernaLogo from '../assets/images/sberna-logo.svg';
import { useEffect, useState } from 'react';
import CrossIcon from '../components/icons/crossIcon';

export default function Home({ materials, news, deviceType }) {
  const [width, setWidth] = useState(576);
  const updateSize = () => setWidth(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);

  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <section>
        <div className="row align-items-center mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="col-sm-6">
            <a href="https://sbernakrmelin.cz">
              <Image src={viking} layout="responsive" objectFit="" width={600} height={484} alt="viking" />
            </a>
          </div>
          <div className="col-sm-6">
            <a href="https://sbernahavirov.cz">
              <Image src={sbernaLogo} layout="responsive" objectFit="" width={600} height={150} alt="viking" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <InfoTop materials={materials} />
        </div>
      </section>
      {news && news.length > 0 && (
        <section>
          <div className="theme-bg-secondary py-5">
            <News news={news} />
          </div>
        </section>
      )}

      <section>
        <div className="theme-bg-secondary py-5">
          <Rema />
        </div>
      </section>
      <section>
        <div className="my-5">
          <ReviewsCarousel deviceType={deviceType} />
        </div>
      </section>
      <section>
        <div className="theme-bg-primary py-4">
          <GoogleMap />
        </div>
      </section>
      <section>
        <div className="theme-bg-primary py-4">
          <GoogleMapHavirov />
        </div>
      </section>
      <section className=" theme-bg-secondary">
        <div className="container py-5">
          <InfoBottom />
        </div>
      </section>
      {modal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.75)' }} onClick={() => setModal(null)}>
          <div style={{ position: 'absolute', textAlign: 'right', paddingRight: '10px', width: '100%', color: 'white', fontSize: '24px' }}>
            <CrossIcon />
          </div>
          <div className="row" style={{ height: '100%', alignContent: 'center' }}>
            <div className="col-12 text-center">
              <Image
                src={'/assets/images/image0.jpg'}
                width={640}
                height={452}
                alt={'vanocni promo'}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/assets/images/image0-blur.jpg"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const matCollection = await db.collection('materials');
  const materials = await matCollection.find({ favorite: true }).toArray();
  const newsCollection = await db.collection('news');
  const news = await newsCollection.find({}).toArray();

  return {
    props: { materials: JSON.parse(JSON.stringify(materials)), news: JSON.parse(JSON.stringify(news)) },
  };
}

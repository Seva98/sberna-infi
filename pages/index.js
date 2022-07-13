import Layout from '../components/common/layout';
import { connectToDatabase } from '../lib/mongodb';
import Banner from '../components/homepage/bannerTop';
import bannerTop from '../assets/images/banner-top.png';
import InfoTop from '../components/homepage/infoTop';
import InfoBottom from '../components/homepage/infoBottom';
import Rema from '../components/homepage/rema';
import ReviewsCarousel from '../components/homepage/reviewsCarousel';
import GoogleMap from '../components/homepage/googleMap';
import { useSession } from 'next-auth/client';
import bcrypt from 'bcryptjs';
import News from '../components/homepage/news';
import CarWreck from '../components/homepage/carWreck';
import Image from 'next/image';
import bannerhavirov from '../assets/images/bannerhavirov.svg';
import banner1 from '../assets/images/banner1.svg';
import banner2 from '../assets/images/banner2.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home({ materials, news, deviceType }) {
  const [session, loading] = useSession();

  const [width, setWidth] = useState(576);
  const updateSize = () => setWidth(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <Layout>
      {/* <section>
        <div className="row mx-auto justify-content-center align-items-center">
          <div className="badge bg-warning pt-3">
            <div className="h2" style={{ whiteSpace: 'pre-line' }}>
              Vážení zákazníci Sběrna Krmelín bude od 4.7. do 6.7. zavřená.
              <br />
              Otevřeno bude od 7.7.
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="row mx-auto my-3 justify-content-center align-items-center gy-3" style={{ maxWidth: '1200px' }}>
          <div className="col-sm-9 mx-auto" style={{ cursor: 'pointer' }}>
            <Link href="https://sbernahavirov.cz">
              <Image src={bannerhavirov} layout="responsive" objectFit="" width={999} height={218} alt="havirov" />
            </Link>
          </div>
          <div className="col-sm-9 mx-auto shadow ">
            <Image src={banner1} layout="responsive" objectFit="" width={999} height={218} alt="vraky" />
          </div>
          <div className="col-sm-9 mx-auto shadow ">
            <Image src={banner2} layout="responsive" objectFit="" width={999} height={218} alt="vozik" />
          </div>
          {/* <div style={{ maxWidth: '16px' }}></div> */}
          {/* <div className="col-sm-3 shadow" style={{ padding: '0', width: width >= 576 ? '23.58%' : '100%' }}>
            <Image src={banner2} layout="responsive" objectFit="contain" width={1430} height={958} alt="oteviracka" />
          </div> */}
        </div>
      </section>
      <section>
        <div className="container">
          {/* <div className="h3 text-danger">Silnice z Ostravy na Mošnov se opravuje. V době od 22.9 - 23.9 bude z obou směru neprujezdná a nepůjde se dostat do Sběrny Krmelín.</div> */}
          {/* <Banner src={bannerTop} /> */}
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
      <section className=" theme-bg-secondary">
        <div className="container py-5">
          <InfoBottom />
        </div>
      </section>
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

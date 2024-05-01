import Layout from '../components/common/layout';
import { connectToDatabase } from '../lib/mongodb';
import InfoTop from '../components/homepage/infoTop';
import InfoBottom from '../components/homepage/infoBottom';
import News from '../components/homepage/news';
import Image from 'next/image';
import viking from '../assets/images/logo-viking.png';
import buchta from '../assets/images/buchta.png';
import { useEffect, useState } from 'react';
import CrossIcon from '../components/icons/crossIcon';
import Link from 'next/link';

export default function Home({ materials, news, deviceType }) {
  const [width, setWidth] = useState(576);
  const updateSize = () => setWidth(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);

  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <section>
        <div className="row align-items-center mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="col-sm-3" />
          <div className="col-sm-6 row align-items-center">
            <div className="col-sm-6">
              <a href="https://sbernakrmelin.cz">
                <Image src={viking} layout="responsive" objectFit="" width={600} height={484} alt="viking" className="mt-auto mb-0" />
              </a>
            </div>
            <div className="col-sm-6">
              <a href="https://sbernahavirov.cz">
                <Image src={buchta} layout="responsive" objectFit="" width={600} height={484} alt="viking" />
              </a>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <div className="row align-items-center mx-auto " style={{ maxWidth: '1200px' }}>
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="row mx-auto shadow justify-content-center align-items-center" style={{ maxWidth: '600px' }}>
              <div className="text-center  p-4 col-sm-9">
                <div className="h5 mt-0 mb-2">Nově měříme na počkání drahé kovy</div>
                <Link href="/cenik?category=661fe0a0a871da4073b327e1">
                  <div className="btn theme-btn-ghost w-50">Ceník drahých kovů</div>
                </Link>
                <div className="h5 mt-2">
                  Máte otázky? Volejte <a href="tel:+420724330834">724 330 834</a>
                </div>
              </div>
              <div className="col-sm-3">
                <Image src={'/assets/images/mereni.jpeg'} layout="responsive" objectFit width={150} height={150} alt="mereni" />
              </div>
            </div>
          </div>
          <div className="col-sm-3" />
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

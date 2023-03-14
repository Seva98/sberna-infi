import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/common/layout';

const Demolition = () => {
  const pageTitle = 'Demolition Services';
  const pageDescription = 'We specialize in demolition work and disposal of all metal materials. Contact us for comprehensive disposal of technological units.';
  const keywords = ['demolition', 'metal materials', 'disposal', 'industrial furnaces', 'conveyors', 'boiler rooms', 'cutting'];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/assets/images/demolice.png" />
        <meta property="og:image:alt" content="Demolition" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sberna.info/en/demolice" />
      </Head>
      <Layout>
        <section className="theme-bg-primary py-4">
          <div className="container">
            <h1>Demolition</h1>
            <div className="card border-0 shadow-lg my-5 position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card-body">
                <div className="card-text pt-1">
                  <h2>Demolition Works</h2>
                  <div>
                    We specialize in demolition work and disposal of all metal materials!
                    <ul>
                      <li>SMELTING AND OTHER INDUSTRIAL FURNACES</li>
                      <li>PRESSES, CONVEYORS, AND FOUNDATIONS</li>
                      <li>STEEL CHIMNEYS</li>
                      <li>TANKS, SILOS, AND EMBANKMENTS</li>
                      <li>INDUSTRIAL HALLS</li>
                      <li>BOILER ROOMS, PACKAGING PLANTS, AND CONCRETE PLANTS</li>
                    </ul>
                  </div>
                  <p>
                    We provide comprehensive disposal of technological units. We will advise you on the appropriate method of disposal (dismantling and
                    demolition), estimate the amount of metal waste, and provide an approximate cost calculation. We will carry out the disposal quickly and
                    professionally with maximum regard for work safety and risk elimination of accidents or injuries. We will suggest the correct solution for
                    you.
                  </p>
                  <h2>Burning Work</h2>
                  <ul>
                    <li>BURNING METALS TO METAL DIMENSIONS</li>
                  </ul>
                  <p>
                    We cut iron, steel, cast iron, and stainless steel. Companies call us when they need to cut large metal units into smaller parts that can be
                    taken away to Recycling Center.
                  </p>
                  <ul>
                    <li>CUTTING EXCAVATORS AND CRANES</li>
                    <li>OLD SHIPS</li>
                    <li>HOT WATER AND STEAM PIPES</li>
                    <li>BOILER ROOMS</li>
                    <li>CISTERN AND WAGONS</li>
                    <li>GUTTERS AND MASTS</li>
                  </ul>
                </div>
                <div className=" text-center">
                  <p>
                    For more information call <a href="tel:+420 733 488 556">+420 733 488 556</a>
                  </p>
                  {/* <Image src="/assets/images/demolice.png" width="555" height="640" alt="demolition" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Demolition;

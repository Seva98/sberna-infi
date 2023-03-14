import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/common/layout';

const Collection = () => {
  const pageTitle = 'Metal Waste Collection Services';
  const pageDescription =
    'We offer metal waste collection services using partner vehicles with hydraulic arms and container carriers. Contact us for an approximate price and weight.';
  const keywords = ['metal waste', 'collection', 'recycling center', 'partner vehicles', 'hydraulic arms', 'container carriers'];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/assets/images/svoz.png" />
        <meta property="og:image:alt" content="Collection" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sberna.info/en/svoz" />
      </Head>
      <Layout>
        <section className="theme-bg-primary py-4">
          <div className="container">
            <h1>Collection</h1>
            <div className="card border-0 shadow-lg my-5 position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card-body">
                <div className="card-text pt-1">
                  <p>
                    Do you have a large amount of metal waste in your garden, workplace, or anywhere else and don&apos;t know how to transport it to a recycling
                    center?
                  </p>
                  <p>Send us a query or photo on WhatsApp, and we will provide you with an approximate price and weight.</p>
                  <p>Nothing is a problem. We are happy to help you with that!</p>
                  <p>
                    With the help of our partner vehicles, we can collect your metal waste. We have vehicles with hydraulic arms and container carriers with
                    capacities from 3-20 tons. Thanks to our partners, we can provide these services under MAXIMALLY advantageous conditions and in the shortest
                    possible time. For us, it is a priority to adhere to safety, environmental, and other legislative standards related to waste management,
                    including storage.
                  </p>
                </div>
                <div className="text-center">
                  <p>
                    For more information call <a href="tel:+420 733 488 556">+420 733 488 556</a>
                  </p>
                  {/* <Image src="/assets/images/svoz.png" width="640" height="572" alt="collection" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Collection;

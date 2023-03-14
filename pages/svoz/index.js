import Layout from '../../components/common/layout';
import Image from 'next/image';
import Head from 'next/head';

const Svoz = () => {
  const pageTitle = 'Svoz kovového odpadu';
  const pageDescription =
    'Potřebujete odvézt větší množství kovového odpadu? S námi to bude hračka. Nabízíme svoz kovového odpadu s využitím vozů s hydraulickými rukami a nosiči kontejnerů. Rádi Vám pomůžeme.';
  const keywords = ['svoz kovového odpadu', 'odvoz kovového odpadu', 'kovový odpad', 'vozy s hydraulickými rukami', 'nosnost až 20t'];

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
        <meta property="og:url" content="https://sberna.info/svoz" />
      </Head>
      <Layout>
        <section className="theme-bg-primary py-4">
          <div className="container">
            <h1>Demolice</h1>
            <div className="card border-0 shadow-lg my-5 position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card-body">
                <div className="card-text pt-1">
                  <p>Máte na zahradě, v práci nebo kdekoliv jinde větší množství kovového odpadu a nevíte jakým způsobem jej přepravit do sběrny?</p>
                  <p>Zašlete nám dotaz nebo fotografii na WhatsApp a my Vám sdělíme orientační cenu i váhu.</p>
                  <p>Nic není problém, rádi vám s tím pomůžeme!</p>
                  <p>
                    S pomocí partnerským vozů můžeme realizovat svoz vašeho kovového odpadu. Disponujeme vozy s hydraulickými rukami i nosiči kontejnerů o
                    nosnostech od 3 - 20t. Díky našim partnerům dokážeme tyto služby realizovat za MAXIMÁLNĚ výhodných podmínek a v brzkém termínu. Je pro nás
                    prioritou zejména dodržování bezpečnostních, ekologických a dalších legislativních norem, týkajících se nakládání s odpady včetně jejich
                    skladování.
                  </p>
                </div>
                <div className="text-center">
                  <p>
                    Pro více informací volejte <a href="tel:+420 733 488 556">+420 733 488 556</a>
                  </p>
                  {/* <Image src="/assets/images/svoz.png" width="640" height="572" alt="svoz" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Svoz;

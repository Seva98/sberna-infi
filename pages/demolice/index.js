import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/common/layout';

const Demolice = () => {
  const pageTitle = 'Demoliční služby';
  const pageDescription =
    'Specializujeme se na demolice a likvidace všeho kovového, jako jsou průmyslové pece, ocelové komíny, průmyslové haly a mnoho dalšího. Poskytujeme také řezání kovů na hutní rozměry.';
  const keywords = ['demolice', 'kovový odpad', 'demoliční práce', 'metalický odpad', 'likvidace odpadu', 'paličské práce', 'hutní rozměry'];

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
        <meta property="og:url" content="https://sberna.info/demolice" />
      </Head>

      <Layout>
        <section className="theme-bg-primary py-4">
          <div className="container">
            <h1>Demolice</h1>
            <div className="card border-0 shadow-lg my-5 position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card-body">
                <div className="card-text pt-1">
                  <h2>Demoliční práce</h2>
                  <div>
                    Specializujeme se na demoliční práce a likvidace všeho kovového!
                    <ul>
                      <li>ŽÍHACÍ A JINÉ PRŮMYSLOVÉ PECE</li>
                      <li>LISY, DOPRAVNÍKY A ZAKLADAČE</li>
                      <li>OCELOVÉ KOMÍNY</li>
                      <li>NÁDRŽE, SILA A NÁSYPKY</li>
                      <li>PRŮMYSLOVÉ HALY</li>
                      <li>KOTELNY, OBALOVNY A BETONÁRNY</li>
                    </ul>
                  </div>
                  <p>
                    Zajišťujeme komplexní likvidaci technologických celků. Poradíme vám s vhodným způsobem likvidace (demontáže a demolice), odhadneme množství
                    kovového odpadu a zpracujeme přibližnou kalkulaci nákladů. Samotnou likvidaci provedeme rychle a profesionálně s maximálním ohledem na
                    bezpečnost práce a eliminaci rizika nehody či úrazu. Navrhneme vám správné řešení
                  </p>
                  <h2>Paličské práce</h2>
                  <ul>
                    <li>PÁLENÍ KOVŮ NA HUTNÍ ROZMĚRY</li>
                  </ul>
                  <p>
                    Řežeme železo, ocel, litinu i nerez. Volají nás firmy, když potřebují rozřezat velké kovové celky na menší části, které je možné odvézt do
                    Sběrny.info
                  </p>
                  <ul>
                    <li>ŘEŽEMĚ BAGRY A JEŘÁBY</li>
                    <li>STARÉ LODĚ</li>
                    <li>HORKOVODY A PAROVODY</li>
                    <li>KOTELNY</li>
                    <li>CISTERNY A VAGÓNY</li>
                    <li>SVODIDLA A STOŽÁRY</li>
                  </ul>
                </div>
                <div className=" text-center">
                  <p>
                    Pro více informací volejte <a href="tel:+420 733 488 556">+420 733 488 556</a>
                  </p>
                  {/* <Image src="/assets/images/demolice.png" width="555" height="640" alt="demolice" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Demolice;

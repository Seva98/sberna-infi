import Layout from '../../components/common/layout';
import GoogleMap from '../../components/homepage/googleMap';
import ContactsCard from '../../components/contacts/contactsCard';
import sberna from '../../assets/images/sberna.jpeg';
import hrebo from '../../assets/images/hrebo.jpeg';
import marek from '../../assets/images/marek.png';
import sykora from '../../assets/images/sykora.jpeg';
import terka from '../../assets/images/terka.jpg';

const Kontakty = () => {
  return (
    <Layout>
      <section className="theme-bg-primary py-4">
        <div className="container">
          <h1>Sběrna Krmelín</h1>
          <div className="row">
            <div className="col-12">
              <ContactsCard image={sberna} name="Sběrna Krmelín" subtitle="Provozovatel LH Store s.r.o." phone="+420 721 180 812" email="info@sbernakrmelin.cz">
                <div className="text-center mb-3">
                  Staroveská 567
                  <br />
                  739 24 Krmelín
                  <br />
                  IČ 278 01 586
                  <br />
                  DIČ CZ278 01 586
                  <br />
                  Datová schránka: xqeyije
                  <br />
                  E-mail: <a href="mailto:info@sbernakrmelin.cz">info@sbernakrmelin.cz</a>
                </div>
              </ContactsCard>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <ContactsCard image={hrebo} name="Ing. Lukáš Hrebík" subtitle="Jednatel" phone="+420 736 642 927" email="hrebik@lhstore.cz" />
            </div>
            <div className="col-md-6 col-xl-3">
              <ContactsCard image={marek} name="Marek Elšík" subtitle="Nákupčí" phone="+420 724 104 673" email="elsik@lhstore.cz" />
            </div>
            <div className="col-md-6 col-xl-3">
              <ContactsCard image={sykora} name="Jiří Sýkora" subtitle="Likvidace autovraků" phone="+420 606 577 677" email="autovraky@centrum.cz" />
            </div>
            <div className="col-md-6 col-xl-3">
              <ContactsCard image={terka} name="Ing. Tereza Hrebíková" subtitle="Ekonom" phone="+420 721 913 428" email="hrebikova@lhstore.cz" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4">
          <GoogleMap />
        </div>
      </section>
      <section className="theme-bg-primary py-4">
        <div className="container">
          <h1>Sběrna Havířov</h1>
          <div className="row">
            <div className="col-12">
              <ContactsCard
                image={sberna}
                name="Sběrna Havířov"
                subtitle="Provozovatel Tera Industry s.r.o."
                phone="+420 733 488 556"
                email="info@sbernahavirov.cz"
              >
                <div className="text-center mb-3">
                  U Závor 591/3
                  <br />
                  736 01 Havířov
                  <br />
                  IČ 142 75 490
                  <br />
                  DIČ CZ142 75 490
                  <br />
                  Datová schránka: 28q4pe
                  <br />
                  E-mail: <a href="mailto:info@sbernahavirov.cz">info@sbernahavirov.cz</a>
                </div>
              </ContactsCard>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ContactsCard image={sykora} name="Radek Orság" subtitle="Jednatel" phone="+420 733 488 556" email="info@sbernahavirov.cz" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4">
          <GoogleMap />
        </div>
      </section>
    </Layout>
  );
};

export default Kontakty;

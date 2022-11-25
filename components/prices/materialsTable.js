import { useState, useEffect } from 'react';
import Image from 'next/image';
import CrossIcon from '../icons/crossIcon';

const MaterialsTable = ({ categories, materials, activeMainCategory }) => {
  const [activeMaterial, setActiveMaterial] = useState(null);
  const [modalSize, setModalSize] = useState(0);

  const getChange = ({ prices }) => {
    if (prices.length <= 1) return;
    const prevPrice = Number(prices[prices.length - 2].price);
    const newPrice = Number(prices[prices.length - 1].price);
    return ((100 * (newPrice - prevPrice)) / prevPrice).toFixed(2);
  };

  useEffect(() => {
    const { height, width } = window.screen;
    const side = height > width ? width : height;
    setModalSize(side > 800 ? 800 : side);
  }, []);

  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  const catsTranslated = [
    {
      cz: 'Měď, Mosaz, Bronz',
      en: 'Copper, Brass, Bronze',
    },
    {
      cz: 'Hliník',
      en: 'Aluminium',
    },
    {
      cz: 'Zinek a Olovo',
      en: 'Zinc and Lead',
    },
    {
      cz: 'Železo a Nerez',
      en: 'Iron and Stainless steel',
    },
    {
      cz: 'Kabely',
      en: 'Cabels',
    },
    {
      cz: 'Papír a Karton',
      en: 'Paper and Cardboard',
    },
    {
      cz: 'Procesory',
      en: 'Processors',
    },
    {
      cz: 'PC komponenty',
      en: 'PC components',
    },
    {
      cz: 'Výpočetní technika',
      en: 'Computing',
    },
    {
      cz: 'Mobilní telefóny',
      en: 'Mobile phones',
    },
    {
      cz: 'Bez označení',
      en: 'Other',
    },
  ];
  const translateCategory = (cat) => {
    const found = catsTranslated.find(({ cz }) => cz === cat);
    return found && isEn() ? found.en : cat;
  };
  const matsTranslated = [
    {
      cz: 'Bronz červená',
      en: 'Bronze red',
      enD: 'Red by piece',
    },
    {
      cz: 'Bronz nová',
      en: 'Bronze new',
      enD: 'Bronze new shiny',
    },
    {
      cz: 'Bronz stará',
      en: 'Bronze old',
      enD: 'Bronze old',
    },
    {
      cz: 'Měď drát nový',
      en: 'Copper wire new',
      enD: 'Copper wire new shiny over 1mm',
    },
    {
      cz: 'Měď karmy bez Fe',
      en: 'Copper karma without Fe',
      enD: 'Karmas from heating',
    },
    {
      cz: 'Měď kusová nová',
      en: 'Copper by piece',
      enD: 'Copper by piece over 5mm',
    },
    {
      cz: 'Měď nová mix',
      en: 'Copper new mix',
      enD: 'Clean shiny, wires, hair, sheet, piece',
    },
    {
      cz: 'Měď pocín',
      en: 'Copper tin',
      enD: 'Copper tin',
    },
    {
      cz: 'Měď rafinační',
      en: 'Copper refining',
      enD: 'Refining, wrapped up',
    },
    {
      cz: 'Měď směs opal',
      en: 'Copper mixture tanned',
      enD: 'Copper mixture tanned',
    },
    {
      cz: 'Měď plech tenký',
      en: 'Copper sheet thin',
      enD: 'Thin shiny',
    },
    {
      cz: 'Měď špony',
      en: 'Copper scraps',
      enD: 'Scraps without Fe',
    },
    {
      cz: 'Měď vlasová',
      en: 'Copper hairy',
      enD: 'Thin shiny hair',
    },
    {
      cz: 'Mosaz špony',
      en: 'Brass scraps',
      enD: 'Scraps without Fe',
    },
    {
      cz: 'Mosaz vodo mix',
      en: 'Brass water mix',
      enD: 'Water brass mix',
    },
    {
      cz: 'Mosaz špony',
      en: 'Brass scraps',
      enD: 'Scraps without Fe',
    },
    {
      cz: 'Mosaz vlasová',
      en: 'Brass hairy',
      enD: 'Thin shiny hair',
    },
    {
      cz: 'Mosaz plech nový',
      en: 'Brass sheet new',
      enD: 'Thin',
    },
    {
      cz: 'Mosaz nábojnice',
      en: 'Brass ammunition',
      enD: 'Ammunition, shells',
    },
    {
      cz: 'Al Cu chladiče',
      en: 'Al Cu coolers',
      enD: 'Aluminium, copper coolers without liquids',
    },
    {
      cz: 'Al dráty čisté',
      en: 'Al wires clean',
      enD: 'Wires new clean',
    },
    {
      cz: 'Al chladiče plast, Fe',
      en: 'Al coolers plastic, Fe',
      enD: 'Coolers including plastic, Fe',
    },
    {
      cz: 'Al litá kola',
      en: 'Al wheels',
      enD: 'Clean wheels without Zn, Pb, valve',
    },
    {
      cz: 'Al litý bez Fe',
      en: 'Cast Al without Fe',
      enD: 'Cast, by piece, heavy Al without Fe',
    },
    {
      cz: 'Al profil',
      en: 'Al profile',
      enD: 'Profile clean Al',
    },
    {
      cz: 'Al profil barevný',
      en: 'Al profile color',
      enD: 'Profiles including PVC without Fe',
    },
    {
      cz: 'Al rafinace',
      en: 'Al refining',
      enD: 'Refining, wrapped up',
    },
    {
      cz: 'Al směs Fe do 2%',
      en: 'Al mix Fe up to 2%',
      enD: 'Aluminium including Fe up to 2%',
    },
    {
      cz: 'Al směs plech',
      en: 'Al mix sheet',
      enD: 'Aluminium mix, sheets, piece without Fe',
    },
    {
      cz: 'Al žaluzie, plechovky',
      en: 'Al blinds, cans',
      enD: 'Cans, foils',
    },
    {
      cz: 'Al pásovina',
      en: 'Al belts',
      enD: 'Shiny el',
    },
    {
      cz: 'Pb Olovo',
      en: 'Pb Lead',
      enD: 'Lead by piece',
    },
    {
      cz: 'Zn Zinek plech',
      en: 'Zn Zinc Sheet',
      enD: 'Zinc, sheet, by piece',
    },
    {
      cz: 'Al-Cu motory malé',
      en: 'Al-Cu small motors',
      enD: 'Small motors aluminium packaging - copper',
    },
    { cz: 'Fe Cu motory', en: 'Fe Cu motors', enD: 'Motors, transformers up to 300kg' },
    {
      cz: 'Fe špony',
      en: 'Fe scraps',
      enD: 'Scraps',
    },
    {
      cz: 'Litina',
      en: 'Cast iron',
      enD: 'Cast iron, bathtubs, without Fe! clean cast iron',
    },
    { cz: 'Nerez', en: 'Stainless steel', enD: 'Nonmagentic stainless steel' },
    { cz: 'Nerez třísky', en: 'Stainless steel scraps', enD: 'Scraps' },
    { cz: 'Železo druh 12', en: 'Iron type 12', enD: 'Heavy processed over 8mm. 0.5m x 1m' },
    { cz: 'Železo druh 16', en: 'Iron type 16', enD: 'Pipes, steel plates 8mm' },
    { cz: 'Železo druh 27', en: 'Iron type 27', enD: 'Iron sheets, this Fe, mix' },
    { cz: 'Železo autodíly lehké', en: 'Iron carparts light', enD: 'Only with IČO' },
    { cz: 'Železo autodíly těžké', en: 'Iron carparts heavy', enD: 'Only with IČO' },
    { cz: 'Železo druh 28', en: 'Iron type 28', enD: 'Fe including other waste, plastic, rubber, wood' },
    { cz: 'Železo druh 12V', en: 'Iron type 12V', enD: 'Heavy over 10mm up to 1.5m, clean' },
    { cz: 'Alternátory', en: 'Alternators', enD: 'Starters' },
    { cz: 'Kabely Cu mastné nad 50%', en: 'Cabels Cu oily over 50%', enD: 'Cabels Cu oily / oily telephone' },
    { cz: 'Kabely a zdroje kompletní', en: 'Cabels a power sources complete', enD: 'Cabels charging 6V, 8V, 12V, 24V and others' },
    { cz: 'Kabely Al slabé', en: 'Cabels Al weak', enD: 'Thin Al cabels' },
    { cz: 'Kabely Cu mix', en: 'Cabels Cu mix', enD: 'Cabels Cu mix without ends over 40%' },
    { cz: 'Kabely Cu nad 60%', en: 'Cabels Cu over 60%', enD: 'Strong power cabels' },
    { cz: 'Kabely Cu, Pb, Fe, Al mix', en: 'Cabels Cu, Pb, Fe, Al mix', enD: 'Cabels including casing Fe, Pb, Al' },
    { cz: 'Kabely Cu UTP', en: 'Cabels Cu UTP', enD: 'Cabels UTP 5 and more veins' },
    { cz: 'Kabely Cu včetně nečistot', en: 'Cabels Cu including dirty', enD: 'Lights, large ends 380, Fe parts, PC cable ends' },
    { cz: 'Kabely hliníkové silnoproudé', en: 'Cabels Al strong power', enD: 'Cabels rough' },
    { cz: 'Kabely koax', en: 'Cabels coax', enD: 'Antena cabels, coax' },
    { cz: 'Kabely Al mastné hrubé', en: 'Cabels Al oily rough', enD: 'Old heavy Pb without Fe' },
    { cz: 'Kabely Al + Cu drát', en: 'Cabels strong Al + Cu wire', enD: 'Cabels strong power with shading' },
    { cz: 'Kabely Al 3x ', en: 'Cabels Al 3x', enD: 'Cabels strong power 3x wire' },
    { cz: 'Kabely 1x silno', en: 'Cabels 1x strong power', enD: 'Cabels 1x rubber strong power 50%' },
    { cz: 'Kabely Al + Cu plech', en: 'Cabels Al + Cu sheet', enD: 'Strong power + Cu sheet' },
    { cz: 'Kabely Al mastné + Fe', en: 'Cabels Al oily + Fe', enD: 'Old with Fe layer' },
    { cz: 'Kabely Cu nad 80%', en: 'Cabels Cu over 80%', enD: 'Strongpower, 1 wire' },
    { cz: 'Karton', en: 'Cardboard', enD: 'Only free' },
    { cz: 'Papír mix', en: 'Paper mix', enD: 'Newspaper, leaflets, magazines' },
    { cz: 'Autobaterie nad 1 t', en: 'Car batteries over 1t', enD: 'Over 1000 kg' },
    { cz: 'Autobaterie', en: 'Car batteries', enD: 'Lead batteries' },
    { cz: 'Elektro - Domací spotřebiče', en: 'Electronics - Home appliances', enD: 'Washers, dishwashers, water heaters or 20 Kč / piece' },
    { cz: 'Elektro mix', en: 'Electronics - mix', enD: 'Radio, fuse, small electronics' },
    { cz: 'Pb baterie trakční', en: 'Lead batteries traction', enD: 'Traction batteries including Fe cover' },
    { cz: 'Plastové PET láhve', en: 'Plastic PET bottles', enD: 'PET7 - Plastic PET bottles mix of colors' },
    { cz: 'CPU 486', en: 'CPU 486', enD: 'Both sides golden old PC' },
    { cz: 'CPU plastové', en: 'CPU plastic', enD: 'Green/brown' },
    { cz: 'CPU s Cu deskou', en: 'CPU with Cu board', enD: 'New types with board' },
    { cz: 'CPU černé', en: 'CPU black', enD: 'With Fe Al board' },
    { cz: 'CPU keramické', en: 'CPU ceramic', enD: 'Ceramic mix' },
    { cz: 'CPU s Au deskou', en: 'CPU with Au board', enD: 'Old CPU with 1x gold board' },
    { cz: 'CPU s 2xAu', en: 'CPU with 2xAu', enD: 'Old CPU with 2x gold board' },
    { cz: 'Notebook', en: 'Notebook', enD: 'Complete' },
    { cz: 'Paměti RAM zl', en: 'RAM gold', enD: 'RAM gold' },
    { cz: 'Paměti RAM st', en: 'RAM silver', enD: 'RAM silver' },
    { cz: 'Grafické karty', en: 'GPU cards', enD: 'Old/new' },
    { cz: 'Základní desky staré 1', en: 'Motherboards old 1', enD: 'Old motherboards, without Al, Fe, cooling' },
    { cz: 'Základní desky staré 2', en: 'Motherboards old 2', enD: 'Including cooling and others' },
    { cz: 'Základní desky nové', en: 'Motherboards new', enD: 'PC MB from year 2010' },
    { cz: 'Zdroje', en: 'Power sources', enD: 'PC power sources' },
    { cz: 'FDD, DVD', en: 'FDD, DVD', enD: 'Mechanics' },
    { cz: 'HDD', en: 'HDD', enD: 'Disks' },
    { cz: 'Základní desky mix', en: 'Motherboards mix', enD: 'Old and new' },
    { cz: 'PC Skříň ', en: 'PC case', enD: 'Case, mb, ram, processor, hdd, power source' },
    { cz: 'Notebook', en: 'Notebook', enD: 'Complete' },
    { cz: 'Průmyslové servery', en: 'Industrial servers', enD: 'Complete' },
    { cz: 'Tablety', en: 'Tablets', enD: 'Complete' },
    { cz: 'Routery, switche', en: 'Routers, switches', enD: 'Network adapters' },
    { cz: 'Kopírky, tiskárny', en: 'Copiers, printers', enD: 'Office appliances' },
    { cz: 'Mobil starý typ', en: 'Mobile old type', enD: 'With buttons' },
    { cz: 'Mobil dotykový', en: 'Mobile touchscreen', enD: 'With touchscreen' },
    { cz: 'Mobil mix ', en: 'Mobile mix', enD: 'Old and new' },
    { cz: 'Desky z mobilů', en: 'Boards from mobile', enD: 'Strongly golden' },
  ];

  const translateMaterial = (material, key) => {
    const found = matsTranslated.find(({ cz }) => cz === material.name);
    return found && isEn() ? found[key] : key === 'en' ? material.name : material.description;
  };

  return (
    <>
      {categories &&
        categories
          .filter((c) => c.mainCategory === activeMainCategory)
          .sort((a, b) => a.order - b.order)
          .map(({ name: catName, _id: catId, mainCategory }) => (
            <div key={catId + catName} className="my-2">
              <div className="h4">{translateCategory(catName)}</div>
              <table className="table table-striped price-list">
                <thead>
                  <tr>
                    <th className="col-4">{isEn() ? 'Name' : 'Název'}</th>
                    <th className="col-4">{isEn() ? 'Description' : 'Popis'}</th>
                    <th className="col-2">{isEn() ? 'Price' : 'Cena'}</th>
                    {mainCategory !== '6127f29e926ea4af80eff0d3' && <th className="col-2">{isEn() ? 'Difference' : 'Rozdíl'}</th>}
                  </tr>
                </thead>
                <tbody>
                  {materials &&
                    materials
                      .filter(({ category }) => category === catId)
                      .sort((a, b) => a.order - b.order)
                      .map((material) => (
                        <tr key={material.name} onClick={() => setActiveMaterial(activeMaterial === material ? null : material)}>
                          <th>
                            <div style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
                              {material.img && <Image src={material.img} width="32" height="32" alt={material.name} />}
                              <div className="ms-3">{translateMaterial(material, 'en')}</div>
                            </div>
                          </th>
                          <td>{translateMaterial(material, 'enD')}</td>
                          <td>{`${material.prices[material.prices.length - 1].price} ${material.unit}`}</td>
                          {mainCategory !== '6127f29e926ea4af80eff0d3' && (
                            <td className={getChange(material) > 0 ? 'text-success' : 'text-danger'}>{getChange(material) ? `${getChange(material)}%` : ''}</td>
                          )}
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          ))}
      {activeMaterial && activeMaterial.img && (
        <div
          style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setActiveMaterial(null)}
        >
          <div style={{ position: 'absolute', textAlign: 'right', paddingRight: '10px', width: '100%', color: 'white', fontSize: '24px' }}>
            <CrossIcon />
          </div>
          <div className="row" style={{ height: '100%', alignContent: 'center' }}>
            <div className="col-12 text-center">
              <Image src={activeMaterial.img} width={modalSize} height={modalSize} alt={activeMaterial.name} objectFit="contain" />
            </div>
            <div className="col-12 text-center lead" style={{ color: 'white', fontWeight: '600' }}>
              {/* <div>{translateMaterial(activeMaterial)}</div> */}
              <div>
                {activeMaterial.prices[activeMaterial.prices.length - 1].price} {activeMaterial.unit}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaterialsTable;

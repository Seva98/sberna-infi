const MainCategoriesSwitcher = ({ mainCategories, activeMainCategory, onChange }) => {
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  const categories = [
    {
      cz: 'Kovy',
      en: 'Metals',
    },
    {
      cz: 'Elektro',
      en: 'Electronics',
    },
  ];

  const translateCategory = (cat) => {
    const found = categories.find(({ cz }) => cz === cat);
    return found && isEn() ? found.en : cat;
  };
  return (
    <div className="row gx-0">
      <div className="col" style={{ borderBottom: '1px solid #526b84' }}></div>
      {mainCategories.map((c) => (
        <div className="col-auto" key={c._id}>
          <button onClick={() => onChange(c._id)} className={`btn btn-${c._id === activeMainCategory ? 'active-table' : 'inactive-table'}`}>
            {translateCategory(c.name)}
          </button>
        </div>
      ))}
      <div className="col" style={{ borderBottom: '1px solid #526b84' }}></div>
    </div>
  );
};

export default MainCategoriesSwitcher;

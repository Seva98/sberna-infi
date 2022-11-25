const BottomAboutHavirov = () => {
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>{isEn() ? 'ID' : 'IČO'}</th>
          <td>27801586</td>
        </tr>
        <tr>
          <th>{isEn() ? 'VAT' : 'DIČ'}</th>
          <td>CZ27801586</td>
        </tr>
        <tr>
          <th>{isEn() ? 'Address' : 'Adresa'}</th>
          <td>
            U Závor 591/3
            <br />
            736 01
            <br />
            Havířov
          </td>
        </tr>
        <tr>
          <th>{isEn() ? 'Bank' : 'Banka'}</th>
          <td>
            Raiffeisen
            <br />
            278010/5500
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BottomAboutHavirov;

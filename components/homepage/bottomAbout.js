const BottomAbout = () => {
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
            Staroveská 567
            <br />
            739 24
            <br />
            Krmelín
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

export default BottomAbout;

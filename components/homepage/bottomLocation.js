const BottomLocation = () => {
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>{isEn() ? 'Collection and purchase of metals' : 'Sběr a výkup kovů'}</th>
          <td>CZT01353</td>
        </tr>
        <tr>
          <td></td>
          <td>CZT01161</td>
        </tr>
        <tr>
          <th>{isEn() ? 'Electrical waste' : 'Elektroodpady'}</th>
          <td>CZT01244</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BottomLocation;

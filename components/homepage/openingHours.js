import ClockIcon from '../icons/clockIcon';
import ShortInfo from '../common/shortInfo';

const OpeningHours = () => {
  return (
    <ShortInfo icon={<ClockIcon className="mb-4" />} title="Otevírací doba">
      <table className="table">
        <tbody>
          <tr>
            <th className="text-end">Pondělí</th>
            <td>8:00-11:30</td>
            <td>
              12:30-16:00 <del>17:00</del>
            </td>
          </tr>
          <tr>
            <th className="text-end">Úterý</th>
            <td>8:00-11:30</td>
            <td>
              12:30-16:00 <del>17:00</del>
            </td>
          </tr>
          <tr>
            <th className="text-end">Středa</th>
            <td>8:00-11:30</td>
            <td>
              12:30-16:00 <del>17:00</del>
            </td>
          </tr>
          <tr>
            <th className="text-end">Čtvrtek</th>
            <td>8:00-11:30</td>
            <td>
              12:30-16:00 <del>17:00</del>
            </td>
          </tr>
          <tr>
            <th className="text-end">Pátek</th>
            <td>8:00-11:30</td>
            <td>
              12:30-16:00 <del>17:00</del>
            </td>
          </tr>
          <tr>
            <th className="text-end">Sobota</th>
            <td colSpan="2">9:00-11:00</td>
          </tr>
          <tr>
            <th className="text-end">Neděle</th>
            <td colSpan="2">Zavřeno</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div className="h5">Vánoční otevírací doba</div>
            </td>
          </tr>
          <tr>
            <th className="text-end" colSpan={2}>
              23.12. - 27.12.
            </th>
            <td>Zavřeno</td>
          </tr>
          <tr>
            <th className="text-end" colSpan={2}>
              28.12. - 30.12.
            </th>
            <td>Otevřeno od 9</td>
          </tr>
          <tr>
            <th className="text-end" colSpan={2}>
              31.12. - 2.1.
            </th>
            <td>Zavřeno</td>
          </tr>
        </tbody>
      </table>
    </ShortInfo>
  );
};

export default OpeningHours;

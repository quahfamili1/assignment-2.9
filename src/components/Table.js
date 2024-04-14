import styles from "./Table.module.css";
function Table({ list }) {
  return (
    <div>
      {/* <p>{list[0].name}</p> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Block</th>
            <th>Storey Range</th>
            <th>Flat_model</th>
            <th>Flat type</th>
            <th>Floor area sqm</th>
            <th>Lease commence date</th>
            <th>Remaining lease</th>
            <th>Month</th>
            <th>Resale price</th>
            <th>Town</th>
            <th>Street name</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item._id}>
                <td>{item.block}</td>
                <td>{item.storey_range}</td>
                <td>{item.flat_model}</td>
                <td>{item.flat_type}</td>
                <td>{item.floor_area_sqm}</td>
                <td>{item.lease_commence_date}</td>
                <td>{item.remaining_lease}</td>
                <td>{item.month}</td>
                <td>{item.resale_price}</td>
                <td>{item.town}</td>
                <td>{item.street_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

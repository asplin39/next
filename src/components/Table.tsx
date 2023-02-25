export const Table = () => {
  const tableData = [
    {
      id: 1,
      name: "Cy Ganderton",
      company: "Littel, Schaden and Vandervort",
      favoriteColor: "Blue",
      job: "Quality Control Specialist",
      lastLogin: "12/16/2020",
      location: "Canada",
    },
    {
      id: 2,
      name: "Hart Hagerty",
      company: "Zemlak, Daniel and Leannon",
      favoriteColor: "Purple",
      job: "Desktop Support Technician",
      lastLogin: "12/5/2020",
      location: "United States",
    },
    {
      id: 3,
      name: "Brice Swyre",
      company: "Carroll Group",
      favoriteColor: "Red",
      job: "Tax Accountant",
      lastLogin: "8/15/2020",
      location: "China",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((n) => (
            <tr key={n.id} className="hover">
              <th>{n.id}</th>
              <th>{n.name}</th>
              <td>{n.job}</td>
              <td>{n.company}</td>
              <td>{n.location}</td>
              <td>{n.lastLogin}</td>
              <td>{n.favoriteColor}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

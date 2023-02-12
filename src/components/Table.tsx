
export const Table = () => {

  const tableData = [
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      company: 'Littel, Schaden and Vandervort',
      location: 'Canada',
      lastLogin: '12/16/2020',
      favoriteColor: 'Blue',
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      company: 'Zemlak, Daniel and Leannon',
      location: 'United States',
      lastLogin: '12/5/2020',
      favoriteColor: 'Purple',
    },
    {
      id: 3,
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      company: 'Carroll Group',
      location: 'China',
      lastLogin: '8/15/2020',
      favoriteColor: 'Red',
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
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
          {tableData.map((n) =>
            <tr key={n.id} className="hover">
              <th>{n.id}</th>
              <th>{n.name}</th>
              <td>{n.job}</td>
              <td>{n.company}</td>
              <td>{n.location}</td>
              <td>{n.lastLogin}</td>
              <td>{n.favoriteColor}</td>
            </tr>
          )}
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
  )
}
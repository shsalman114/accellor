import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import './users.scss';



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar', headerName: 'Avatar', width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  {
    field: 'actions', headerName: 'Actions', width: 100,
    renderCell: (params) => {
      return <div className="action">
        <div className="view">View</div>
        <div className="delete">Delete</div>
      </div>
    }
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    type: 'boolean',
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add new User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  )
}

export default Users
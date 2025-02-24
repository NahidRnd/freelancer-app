
import Loading from '../../../ui/Loading';
import Table from '../../../ui/Table'
import useUsers from '../useUsers';
import UserRow from './UserRow';

function UsersTable() {
    const {isLoading, users} = useUsers();
    console.log("users:", users);

    if(isLoading) return <Loading />

    if(!users.length) return <Empty resourceName="کاربری" />

  return (
    <Table>
        <Table.Header>
                <th>#</th>
                <th>نام کاربر</th>
                <th>ایمیل</th>
                <th>شماره تلفن</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
        </Table.Header>
        <Table.Body>
            {
                users.map((user, index) => {                    
                    return <UserRow key={user._id} user={user} index={index} /> 
                })
            }
        </Table.Body>
      </Table>
  )
}

export default UsersTable

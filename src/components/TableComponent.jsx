import axios from "axios";
import Table from "../table";
import { useEffect, useState } from "react";


const TableComponent = () => {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:3000/users')
    .then(res => setUsers(res.users))
    .catch(err => console.log(err))
  },[]) 
   

  return (
    <div className='flex justify-between ml-20 mr-20 mt-3 border b-4'>

      <div className="w-full">
        <Table
          searchable={true}
          head={[
            { name: 'Sosyal Medya Linki', sortable: true },
            { name: 'Sosyal Medya Adı', sortable: true },
            { name: 'Açıklama', sortable: true },

          ]}
          body={users && users.map((user, key) => ([
            user.name,
            user.surname,
            user.email,
            [
              <button className="h-8 px-4 m-6   flex items-center justify-center rounded bg-blue-600 text-white">Düzenle</button>,
              <button onClick={() => {
                const tmpUsers = [...users]
                tmpUsers.splice(key, 1)
                setUsers(tmpUsers)
              }} className="h-8 px-4 m-6   flex items-center justify-center rounded bg-red-600 text-white">Sil</button>
            ]
          ]))}
        />
      </div>
    </div>
  )
}

export default TableComponent
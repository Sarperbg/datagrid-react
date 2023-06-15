import axios from "axios";
import Table from "../table";
import { useEffect, useState } from "react";


const TableComponent = ({itemsPerPage} ) => {

  
  const [users, setUsers] = useState(() => [
    {
      "link": "instagram.com/mobilerast/",
      "name": "instagram",
      "desc": "We help you to finish your development project successfully."
    },
    {
      "link": "tr.linkedin.com/company/rastmobile",
      "name": "linkedin",
      "desc": "Hire vetted developers from Rast Mobile to scale up your tech projects."
    },
    {
      "link": "behance.net/rastmobile",
      "name": "behance",
      "desc": "Software Development Agency Rast Mobile Information Technology Ltd."
    },
    {
      "link": "twitter.com/rastmobile",
      "name": "twitter ",
      "desc": "Software Development Agency Rast Mobile Information Technology Ltd."
    },
  ]);



  return (
    <div className='flex justify-between ml-20 mr-20 mt-3 border b-4'>
    
      <div className="table w-full">
        <Table
          searchable={true}
          head={[
            { name: 'Sosyal Medya Linki', sortable: true },
            { name: 'Sosyal Medya Adı', sortable: true },
            { name: 'Açıklama', sortable: true  },

          ]}
          body={users && users.map((user, key) => ([
            user.link,
            user.name,
            user.desc,
            [
              <button className="h-8 px-4 m-6  flex items-center justify-center rounded bg-blue-600 text-white">Düzenle</button>,
              <button onClick={() => {
                const tmpUsers = [...users]
                tmpUsers.splice(key, 1)
                setUsers(tmpUsers)
              }} className="h-8 px-4 m-6   flex items-center justify-center rounded bg-red-600 text-white">Sil</button>
            ]
          ]))}
        />
        
        <div className='flex justify-between m-4 mt-40 border b-4'>
          <div>
            <button className="text-[#744BFC] ">Show</button>
            
          </div>
         
        </div>
     


      </div>
      
      
    </div>
  )
}

export default TableComponent
import axios from "axios";
import Table from "../table";
import { useEffect, useState } from "react";


const TableComponent = ({itemsPerPage} ) => {

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => SVGMetadataElement(res.data))
    .catch(err => console.log(err))
  },[])

  
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
    <div className='flex flex-col justify-between mt-3 border b-4 max-sm:m-0 max-sm:p-0'>
    
      <div className="table w-full max-sm:m-0 max-sm:p-0 max-md:m-0 max-md:p-0">
        <Table
          searchable={true}
          head={[
            { name: 'Sosyal Medya Linki' , sortable: true },
            { name: 'Sosyal Medya Adı', sortable: true },
            { name: 'Açıklama',  sortable: true  },

          ]}
          body={users && users.map((user, key) => ([
            user.link,
            user.name,
            user.desc,
            [
              <button className="h-8 w-24 px-4 m-6 flex items-center justify-center rounded bg-blue-600 text-white
              max-md:justify-center max-md:mx-auto max-md:w-auto
              ">Düzenle</button>,
              <button onClick={() => {
                const tmpUsers = [...users]
                tmpUsers.splice(key, 1)
                setUsers(tmpUsers)
              }} className="h-8 w-24 px-4 m-6 flex items-center justify-center rounded bg-red-600
               text-white max-lg:w-auto max-md:w-auto max-sm:w-24
             
           ">Sil</button>
            ]
          ]))}
        />
        
     
     


      </div>
      
      <div className='flex m-8 p-8 '>
          <div>
            <button className="text-[#744BFC] ">Show</button>
            
          </div>
         
        </div>
    </div>
  )
}

export default TableComponent
import React from 'react'
import rectangle from '../assets/images/Rectangle 44.png'
import union from '../assets/images/Union.png'
import Vector5 from '../assets/images/Vector5.png'
import TableHeader from '../components/TableHeader'
import TableComponent from '../components/TableComponent'
const Container = () => {
    return (
        <div className='container m-8 border mx-auto bg-gray-300 b-5 w-[1580px] h-[841px] rounded-md'>
        <TableHeader />
       <TableComponent />
       </div>

    )
}

export default Container

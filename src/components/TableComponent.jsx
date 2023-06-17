import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtnGroup, MDBBtn, MDBPaginationItem, MDBPaginationLink, MDBPagination } from "mdb-react-ui-kit";
import union from '../assets/images/Union.png'
import { AiOutlineSearch } from "react-icons/ai"
import { BiSortAZ } from 'react-icons/bi'
import Modals from "../components/Modals";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(4);
  const [showMyModal, setShowMyModal] = useState(false)


  const handleOnClose = () => {
    setShowMyModal(false)
  }

  const sortOptions = ["name", "surname", "email"];

  useEffect(() => {
    loadUsersData(0, 4, 0);
  }, []);


  const loadUsersData = async (start, end, increase) => {
    return await axios.get(`http://localhost:3030/users?_start=${start}&_end=4`)
      .then((response) => {
        setData(response.data);
        setCurrentPage(currentPage + increase);
      })
      .catch((err) => console.log(err))
  };
  console.log("data", data)

  const handleReset = () => {
    loadUsersData();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3030/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err))
  }
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    e.preventDefault();

    return await axios
      .get(`http://localhost:3030/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err))
  }

  const handleFilter = async (value) => {
    return await axios
      .get(`http://localhost:3030/users?status=${value}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const renderPagination = () => {
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUsersData(4, 8, 1)}>Next</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationItem>
              <MDBBtn onClick={() => loadUsersData((currentPage - 1) * 4, currentPage * 4, -1)}>Prev</MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadUsersData((currentPage + 1) * 4, (currentPage + 2) * 4, 1)}>Next</MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      )
    }

  };

  return (
    <MDBContainer className="border-8">
      <div>

        <form
          className="flex justify-between items-center  max-sm:p-0
      max-sm:justify-between max-lg:justify-center"
          onSubmit={handleSearch}>

          <div className="flex justify-between items-center m-4 p-4 max-sm:p-0
      max-sm:justify-between max-lg:justify-center">
            <input
              type="text"
              placeholder="Search objects.."
              className="font-light text-gray-700  text-[14px] flex justify-center m-4 w-[380px] h-[42px] rounded-[39px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"

              value={value}
              onChange={(e) => setValue(e.target.value)}

            />
            <MDBBtnGroup className="flex items-center">

              <button className=' max-md:flex-wrap flex relative -left-14  w-[49px] h-[42px] bg-[#744BFC] rounded-tr-2xl	rounded-br-2xl justify-center items-center'>
                <AiOutlineSearch className="min-w-min w-6 h-6 text-white relative" />
              </button>

              <button className=' bg-white justify-center items-center flex w-12 h-12 rounded-2xl' onClick={() => handleReset()}>
                <img src={union} alt='' className="" />
              </button>

              <button className="h-10 w-32 relative ml-4 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4" color="info" onClick={() => handleReset()}>
                Reset
              </button>

            </MDBBtnGroup>
          </div>



          <div className="desc items-center m-4 p-4">

            <button
              className='w-[200px] h-[42px] m-4 text-white text-md bg-regal-blue items-center
                          cursor-pointer rounded-[39px] font-medium transition-all hover:text-lg
                   hover:bg-hover-blue hover:scale-80  max-lg:text-sm '
              onClick={() => setShowMyModal(true)}>
              +   Yeni bir hesap ekle

            </button>

          </div>
        </form>


        <MDBRow className="w-screen">
          <MDBCol size={3} className="flex justify-start text-xl items-center">
            <MDBTable className="w-full ml-12">
              <MDBTableHead dark className="font-bold text-left">
                <tr>
                  <th scope="col" className="text-2xl flex items-center gap-8">Sosyal Medya Linki
                    <BiSortAZ />
                  </th>

                  <th scope="col" className="text-2xl flex-row items-center">Sosyal Medya Adı
                  </th>
                  <th scope="col" className="text-2xl">Açıklama</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="justify-center items-center">
                  <tr className="">
                    <td colSpan={4} className="text-2xl text-center border-4" >
                      No Data Found</td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr className="border-4">
                      <td>{item.name}</td>
                      <td>{item.surname}</td>
                      <td>{item.email}</td>

                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>

        </MDBRow>

      </div>
      <MDBRow>
        <MDBCol size={8}>
          <h5>Sort by:</h5>
          <select className="w-1/2 rounded-lg h-16"
            onChange={handleSort}
            value={sortValue}
          >
            <option>Please Select Value</option>
            {sortOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol size={4}>
          <h5>Filter by status:</h5>
        </MDBCol>

      </MDBRow>
      <Modals onClose={handleOnClose} visible={showMyModal} />

    </MDBContainer>

  )
}

export default TableComponent

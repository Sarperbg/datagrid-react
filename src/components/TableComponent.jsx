import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtnGroup, MDBPaginationItem, MDBPaginationLink, MDBPagination } from "mdb-react-ui-kit";
import union from '../assets/images/Union.png'
import { AiOutlineSearch } from "react-icons/ai"
import Modals from "../components/Modals";
import {GiCancel} from 'react-icons/gi'

const TableComponent = ({ visible, onClose }) => {


  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [showMyModal, setShowMyModal] = useState(false)
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");
  const [formData, setFormData] = useState({ link: "", name: "", desc: "" });

  const url = `http://localhost:3030/users`



  const handleOnClose = () => {
    setShowMyModal(false)
  }

  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  const sortOptions = ["link", "socialMedia", "desc"];

  useEffect(() => {
    loadUsersData(0, 4, 0);
  }, []);

  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })

  }

  const loadUsersData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        return await axios
          .get(
            `http://localhost:3030/users?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err))

      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:3030/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err))

      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:3030/users?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase)
          })
          .catch((err) => console.log(err))

      default:
        return await axios
          .get(`http://localhost:3030/users?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err))
    }

  };

  console.log("data", data)

  function handleSubmit() {

    axios.post('http://localhost:3030/users', formData)
      .then(res => {
        alert("Data added successfully!")
      }).catch(err => console.log(err))

  }


  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    loadUsersData(0, 4, 0);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    loadUsersData(0, 4, 0, "search")

  }

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    loadUsersData(0, 4, 0, "sort", value)
  };



  const renderPagination = () => {
    if (data.length < 4 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0 mx-auto justify-center text-center items-center">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <button className="w-24 rounded-2xl bg-[#04AA6D]" onClick={() => loadUsersData(4, 8, 1, operation, sortFilterValue)}
            >
              Next
            </button>

          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0 mx-auto justify-center text-center items-center bg-white-300">
          <MDBPaginationItem className="">
            <button
              className="w-24 rounded-2xl bg-[#04AA6D]"
              onClick={() =>
                loadUsersData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Prev
            </button>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <button
              className="w-24 rounded-2xl bg-[#04AA6D]"
              onClick={() =>
                loadUsersData(
                  (currentPage + 1) * 4,
                  (currentPage + 2) * 4,
                  1,
                  sortFilterValue
                )
              }
            >Next
            </button>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination className="mb-0 mx-auto justify-center text-center items-center">

          <MDBPaginationItem>
            <button
              className="w-24 rounded-2xl bg-[#04AA6D]"
              onClick={() =>
                loadUsersData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )}>Prev</button>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      )
    }


  }


  return (
    <MDBContainer className="border-8 max-md:items-center max-md:justify-between max-md:text-lg">
      <div className="m-2 p-2 overflow-hidden max-md:flex-wrap">

        <form
          className="flex justify-between items-center max-sm:p-0
      max-sm:justify-between max-lg:justify-center max-xl:p-0 max-lg:p-0 max-xl:flex-col
     "
          onSubmit={handleSearch}>

          <div className="flex justify-between items-center m-4 p-4 max-sm:p-0 
      max-sm:justify-between max-lg:justify-center max-lg:w-2/3 ">
            <input
              type="text"
              placeholder="Search objects.."
              className="font-light text-gray-700  text-[14px] flex justify-center m-4 w-[380px] h-[42px] rounded-[39px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"

              value={value}
              onChange={(e) => setValue(e.target.value)}

            />
            <MDBBtnGroup className="flex justify-start items-center">

              <button className='max-md:flex-wrap flex relative -left-14  w-[49px] h-[42px] bg-[#744BFC] rounded-tr-2xl	rounded-br-2xl justify-center items-center'>
                <AiOutlineSearch className="min-w-min w-6 h-6 text-white relative" />
              </button>

              <button className='bg-white justify-center items-center flex w-12 h-12 rounded-2xl
              max-xxs:absolute max-xs:absolute max-md:absolute'
                onClick={() => handleReset()}>
                <img src={union} alt='' className="" />
              </button>

              <button className="h-10 w-32 font-bold relative ml-4 rounded whitespace-nowrap border border-red-500 text-red-500 text-md px-4
              max-xxs:hidden max-xs:hidden max-sm:hidden
              " onClick={() => handleReset()}>
                Reset
              </button>

            </MDBBtnGroup>
          </div>

          <div className="desc items-center m-4 p-4 min-w-min">
            <button
              className='w-[200px] h-[42px] m-4 text-white text-md bg-regal-blue items-center min-w-fit
                          cursor-pointer rounded-[39px] font-medium transition-all hover:text-lg
                   hover:bg-hover-blue hover:scale-80  max-lg:text-sm'
              onClick={() => setShowMyModal(true)}>
              +   Yeni bir hesap ekle

            </button>

          </div>
        </form>


        <MDBRow className="w-full">
          <MDBCol size={4} className="flex justify-start text-xl items-center">
            <MDBTable className="w-full p-8 ">
              <MDBTableHead dark className="font-bold text-left items-center
               max-md:border-4   max-lg:text-center max-md:text-center max-sm:text-center
               max-xxs:text-center max-md:m-0 max-xxs:p-0 max-xs:p-0 max-xs:text-center">
                <tr className="max-md:flex-col 
                max-xs:w-full max-xs:flex-col max-xs:justify-center">
                  <th scope="col" className="text-2xl items-center max-md:text-sm max-xxs:ml-0
                    ">Sosyal Medya Link
                  </th>

                  <th scope="col" className="text-2xl items-center max-md:text-sm">Sosyal Medya Adı
                  </th>

                  <th scope="col" className="text-2xl items-center max-md:text-sm">Açıklama</th>

                </tr>
              </MDBTableHead>

              {data.length === 0 ? (
                <MDBTableBody className="justify-center items-center align-center ">
                  <tr className="">
                    <td colSpan={8} className="text-2xl text-center mb-0 border-4 text-red-400 mt-9" >
                      No Data Found</td>
                  </tr>

                </MDBTableBody>

              ) : (
                data.map((item, index) => (
                  <MDBTableBody className="" key={index}>
                    <tr className="max-md:text-sm  border-4 max-xxs:m-4 max-xs:m-4 max-md:m-4  
                   ">
                      <td className="
                      w-1/4 border-4  max-xs:text-[12px] max-xs:relative max-xs:flex-wrap
                      max-xxs:m-0 max-xxs:p-0 max-xxs:text-[10px] 
                      max-xs:m-0 max-xs:p-0  max-xs:w-1/4 
                      flex-wrap 
                      ">{item.link}</td>

                      <td className="
                      w-1/4 border-4  max-xs:ml-8
                      max-xxs:m-0 max-xxs:p-0 max-xxs:text-[10px] max-xxs:w-1/4 max-sm:w-1/4
                      max-sm:text-sm max-xs:m-0 max-xs:p-0 max-xs:text-[12px] max-xs:w-1/4 
                      
                      ">{item.socialMedia}</td>
                      <td className="w-2/4 border-4  max-xs:flex-wrap
                      max-xxs:m-0 max-xxs:p-0 max-xxs:ml-4 max-xxs:text-[10px] max-sm:w-2/4 max-xxs:w-2/4
                      max-xs:p-0 max-xs:text-[12px] max-xs:w-1/4 ">{item.desc}</td>
                      <div className=" flex items-center my-auto">
                       
                          
                          <GiCancel className="flex h-8 w-8 text-red-400 rounded-xl justify-center items-center my-auto bg-center" 
                             onClick={(index) => deleteData(index)}/>
                      </div>


                    </tr>

                  </MDBTableBody>
                ))
              )}

            </MDBTable>
          </MDBCol>

        </MDBRow>
        <div className="text-center text-xl">{renderPagination()}</div>
      </div>
      {data.length > 0 && (
        <MDBRow className="flex flex-col m-4">
          <MDBCol className="m-8 max-md:w-2/5">
            <h5>Sort by:</h5>
            <select className="w-1/5 mt-6 rounded-lg h-16 min-w-fit"
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


        </MDBRow>
      )}

      <Modals
        onClose={handleOnClose}
        visible={showMyModal}
        data={formData}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />

    </MDBContainer>

  )
}

export default TableComponent

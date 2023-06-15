import { useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa"
import { useMediaQuery } from '@react-hook/media-query'
import TableMobile from "./table-mobile";
import union from './assets/images/Union.png'
import { AiOutlineSearch } from "react-icons/ai"
import Modals from "./components/Modals";

export default function Table({ head, body, searchable }) {

	const [showMyModal, setShowMyModal] = useState(false)

	const handleOnClose = () => {
		setShowMyModal(false)
	}

	const isMobile =
		useMediaQuery('(max-width: 600px)')
	const [sorting, setSorting] = useState(false)
	const [search, setSearch] = useState('')
	const filteredData = body && body.filter(
		items => items.some(
			item => (item?.key || item?.props?.searchableText || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
		)
	).sort((a, b) => {
		if (sorting?.orderBy === 'asc') {
			return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
		}
		if (sorting?.orderBy === 'desc') {
			return b[sorting.key].toString().localeCompare(a[sorting.key])
		}
	})

	if (!body || body?.length === 0) {
		return (
			<div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek veri bulunmuyor.</div>
		)
	}

	return (
		<div className="font-serif m-4 p-4">
			{searchable && (
				<div className="mb-4 flex justify-between gap-x-2">

					<div className="flex items-center">
						<input
							value={search}
							onChange={e => setSearch(e.target.value)}
							type="text"
							placeholder="Search objects.."
							className="font-light text-gray-700  text-[14px] flex justify-center m-4 w-[380px] h-[42px] rounded-[39px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"
						/>
						<button className='flex relative -left-16 w-[49px] h-[42px] bg-[#744BFC] rounded-tr-2xl	rounded-br-2xl justify-center items-center'>
							<AiOutlineSearch className="w-5 h-5 text-white" />
						</button>



						<button className='flex relative -left-14 w-[49px] h-[42px] bg-white rounded-[29px] justify-center items-center'>
							<img src={union} alt='' />

						</button>
						<div>
							{sorting && (
								<button
									onClick={() => setSorting(false)}
									className="h-10 reative -left-4 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4">
									Sıralamayı İptal Et
								</button>
							)}
						</div>
					</div>

					<div className='flex items-center justify-center'>
						<button
							className='w-[175px] h-[42px] m-4 text-white text-md bg-regal-blue items-center
                			cursor-pointer rounded-[39px] font-medium transition-all hover:text-lg
						   hover:bg-hover-blue hover:scale-95'
							onClick={() => setShowMyModal(true)}>
							+   Yeni bir şey ekle

						</button>

					</div>
				</div>

			)}
			{isMobile &&
				<TableMobile head={head} body={filteredData} />}
			{!isMobile && (
				<div className="w-full min-w-min border rounded p-4">
					<table className="w-full h-full">
						<thead className="w-full">
							<tr>
								{head.map((h, key) => (
									<th
										className="font-medium text-sm p-4 border-b-2"
										key={key}>
										<div className="desc">
											{h.name}
											{h.sortable && (
												<button onClick={() => {
													if (sorting?.key === key) {
														setSorting({
															key,
															orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
														})
													} else {
														setSorting({
															key,
															orderBy: 'asc'
														})
													}
												}}>
													<div className="">
													{sorting?.key === key && (
														sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
													)}
													{sorting?.key !== key && <FaSort size={14} />}
													</div>
													
												</button>
											)}
										</div>

									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{filteredData.map((items, key) => (
								<tr className="group rounded-md" key={key}>
									{items.map((item, key) => (
										<td
											className="list m-4 p-4 text-sm group-hover:bg-blue-100 group-hover:text-blue-600 "
											key={key}>
											{Array.isArray(item) ? (
												<div className="flex gap-x-2.5">
													{item}
												</div>
											) : item}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					<Modals onClose={handleOnClose} visible={showMyModal} />
									
				</div>
			)}
		</div>
	)
}
import { Add } from '@dashboard/components/Buttons/Add'
import { Filters } from '@dashboard/components/Filters'
import Pagination from '@dashboard/components/Pagination'
import { Table } from '@dashboard/components/Table'
import useUsers from '@dashboard/hooks/userHooks/useUsers'
import { SectionShowData } from '@dashboard/style/style'
import { columnsData } from '@dashboard/utils/tableHeaders/headers'
import { DashboardLayout } from '@layouts/DashboardLayout'
import React, { useEffect, useState } from 'react'

function DashboardUser() {
	const [currentPage, setCurrentPage] = useState(1)
	const [pageSize, setPageSize] = useState(6)
	const [search, setSearch] = useState('')
	const [filters, setFilters] = useState({})

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage)
	}

	const handlePageSizeChange = (newPageSize) => {
		setPageSize(newPageSize)
		setCurrentPage(1)
	}

	const {
		usersData,
		paginationData,
		fetchUsers,
		reqLoading,
		reqError,
	} = useUsers({ filters })

	useEffect(() => {
		fetchUsers({ filters })
	}, [filters])

	useEffect(() => {
		const filters = search
			? { page: currentPage, pageSize: pageSize, name: search }
			: { page: currentPage, pageSize: pageSize }
		setFilters(filters)
	}, [currentPage, pageSize, search])

	const columns = React.useMemo(() => columnsData.userColumns, [])

	return (
		<DashboardLayout>
			<Filters search={search} setSearch={setSearch} />
			<SectionShowData>
				{/* {reqLoading && <Loader />} */}
				{/* <Loader /> */}

				<div>
					<div className='table-container'>
						<h2>All Users</h2> <Add url='/dashboard/users/add' title='User' />
					</div>
					<Table columns={columns} data={usersData || []} />

					<Pagination
						totalPages={paginationData?.pages}
						page={currentPage}
						onPageChange={handlePageChange}
						onPageSizeChange={handlePageSizeChange}
					/>

					{!usersData?.length && (
						<h3 className='is-not-records'>There are not records to show</h3>
					)}
				</div>
			</SectionShowData>
		</DashboardLayout>
	)
}

export default DashboardUser

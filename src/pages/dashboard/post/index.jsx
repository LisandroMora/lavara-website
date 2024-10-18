import { Add } from '@dashboard/components/Buttons/Add'
import { Filters } from '@dashboard/components/Filters'
import Pagination from '@dashboard/components/Pagination'
import { Table } from '@dashboard/components/Table'
import usePosts from '@dashboard/hooks/postHooks/usePosts'
import { SectionShowData } from '@dashboard/style/style'
import { columnsData } from '@dashboard/utils/tableHeaders/headers'
import { DashboardLayout } from '@layouts/DashboardLayout'
import React, { useEffect, useState } from 'react'

function DashboardPost() {
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
		postsData,
		paginationData,
		fetchPosts,
		reqLoading,
		reqError,
	} = usePosts({ filters })

	useEffect(() => {
		fetchPosts({ filters })
	}, [filters])

	useEffect(() => {
		const filters = search
			? { page: currentPage, pageSize: pageSize, title: search }
			: { page: currentPage, pageSize: pageSize }
		setFilters(filters)
	}, [currentPage, pageSize, search])

	const columns = React.useMemo(() => columnsData.postColumns, [])

	return (
		<DashboardLayout>
			<Filters search={search} setSearch={setSearch} />
			<SectionShowData>
				{/* {reqLoading && <Loader />} */}
				{/* <Loader /> */}

				<div>
					<div className='table-container'>
						<h2>All Posts</h2> <Add url='/dashboard/post/add' title='Post' />
					</div>
					<Table columns={columns} data={postsData || []} />

					<Pagination
						totalPages={paginationData?.pages}
						page={currentPage}
						onPageChange={handlePageChange}
						onPageSizeChange={handlePageSizeChange}
					/>

					{!postsData?.length && (
						<h3 className='is-not-records'>There are not records to show</h3>
					)}
				</div>
			</SectionShowData>
		</DashboardLayout>
	)
}

export default DashboardPost

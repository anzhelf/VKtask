import { Pagination, Stack } from '@mui/material'
import { FC } from 'react'
import styles from './PaginationOutlined.module.scss'

interface PaginationOutlinedProps {
	pageQty: number
	page: number
	handleChangePagination: (
		event: React.ChangeEvent<unknown>,
		num: number,
	) => void
}

const PaginationOutlined: FC<PaginationOutlinedProps> = ({
	pageQty,
	page,
	handleChangePagination,
}) => {
	return (
		<Stack className={styles.pagination} spacing={2}>
			{!!pageQty && (
				<Pagination
					size='small'
					count={pageQty}
					page={page}
					onChange={handleChangePagination}
					variant='outlined'
				/>
			)}
		</Stack>
	)
}

export default PaginationOutlined

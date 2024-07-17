import { FC } from 'react'
import { Pagination, Stack } from '@mui/material'
import styles from './PaginationOutlined.module.scss'

interface PaginationOutlinedProps {
	pageQty: number
	page: number
	handleChange: (event: React.ChangeEvent<unknown>, num: number) => void
}

const PaginationOutlined: FC<PaginationOutlinedProps> = ({
	pageQty,
	page,
	handleChange,
}) => {
	return (
		<Stack className={styles.pagination} spacing={2}>
			{!!pageQty && (
				<Pagination
					count={pageQty}
					page={page}
					onChange={handleChange}
					variant='outlined'
				/>
			)}
		</Stack>
	)
}

export default PaginationOutlined

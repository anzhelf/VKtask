import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import styles from './PaginationOutlined.module.scss'

const PaginationOutlined = () => {
	return (
		<Stack className={styles.pagination} spacing={2}>
			<Pagination count={10} variant='outlined' />
		</Stack>
	)
}

export default PaginationOutlined

import { Pagination, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/filterSlice';
import type { RootState } from '../../redux/store';
import styles from './PaginationOutlined.module.scss';

const PaginationOutlined = () => {
  const page = useSelector((state: RootState) => state.filter.pages.page);
  const pageQty = useSelector(
    (state: RootState) => state.filter.pages.pagesQty,
  );
  const dispatch = useDispatch();

  const handleChangePagination = (
    _: React.ChangeEvent<unknown>,
    num: number,
  ): void => {
    dispatch(setPage(num));
  };

  return (
    <Stack className={styles.pagination} spacing={2}>
      {!!pageQty && (
        <Pagination
          size="small"
          count={pageQty}
          page={page}
          onChange={handleChangePagination}
          variant="outlined"
        />
      )}
    </Stack>
  );
};

export default PaginationOutlined;

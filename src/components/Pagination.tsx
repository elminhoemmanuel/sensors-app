import React from 'react';
import { PageData } from '../interfaces/home';
import Button from './common/Button';

type PaginationProps = {
    pageData: PageData;
    handlePageChange: (val: number) => void;
}

const Pagination = ({ pageData, handlePageChange }: PaginationProps) => {
    return (
        <div className='mt-4 flex items-center justify-end'>
            {
                pageData?.pages?.map((page, index) => {
                    let isLast = pageData.pages.length === index + 1;
                    return <Button
                    onClick={() => handlePageChange(page)}
                    key={page}
                    variant='secondary'
                    className={`${!isLast ? 'mr-2' : ""} py-1 px-3`}
                >
                    {page}
                </Button>
                })
            }
        </div>
    )
}

export default Pagination
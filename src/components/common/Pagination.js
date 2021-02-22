import React from 'react';
import _ from 'lodash'
import propTypes from "prop-types";

function Pagination({ itemsCount, pageSize, currentPage, onPageChange }) {
    const pagesCount = Math.ceil(itemsCount/pageSize);
    if(pagesCount===1) return null;
    const pages =_.range(1, pagesCount +1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"} onClick={() => onPageChange(page)} ><button  className="page-link">{page}</button></li>

                ))}
            </ul>
        </nav>
    );
}
Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination;
const Pagination = ({
    page, setPage, perPage, setPerPage, totalPage,
}) => {
    return (
        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
            {
                Array.from(Array(totalPage).keys()).map((pageNum) => (
                    <li key={pageNum}>
                        <button
                            className={`block h-8 w-8 rounded border border-gray-100 text-center leading-8 ${pageNum + 1 === page ? 'bg-gray-200' : ''}`}
                            onClick={() => setPage(pageNum + 1)}
                        >
                            {pageNum + 1}
                        </button>
                    </li>
                ))
            }
            <li>
                <button
                disabled={page === totalPage}
                    onClick={() => setPage(page + 1)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ol>
    )
}

export default Pagination;

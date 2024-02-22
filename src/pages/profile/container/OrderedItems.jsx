import { useGetReceiptsQuery } from '../../../services/orderApi.js'
import { useEffect, useState } from 'react'

export default function OrderedItems(){
    const [receipts , setReceipts] = useState();
    const [totalPages , setTotalPages] = useState(1);
    const [currentPage , setCurrentPage] = useState(1)
    const {data , isSuccess , isLoading, isError}= useGetReceiptsQuery();

    useEffect(()=> {
        setReceipts(data?.data)
        setTotalPages(data?.meta?.totalPages)
    },[isSuccess])

    console.log("Current page : " , currentPage)

    return (
        <>
            <h3 className="my-5 font-semibold tracking-wider text-textColor cursor-pointer hover:text-textColor/75">Ordered Items</h3>
            <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Items
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Total
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Process
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Ordered At
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {
                            receipts?.map((item , index)=> (
                                <tr key={index} className={index % 2 === 0 && 'bg-gray-200'}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {item?.user?.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-wrap">
                                        {item?.orders?.map((o, index) => (
                                            <span key={index}>
                                                <span className="">{o?.product} <span className="text-xs bg-primary text-white rounded-md px-1">{o?.quantity}</span> </span>
                                                {index !== item?.orders?.length - 1 ? ' , ' : null}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {item?.total}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {item?.process}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {item?.createdAt}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                {!isLoading && isSuccess && totalPages > 1 && (
                    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                        <ol className="flex justify-end gap-1 text-xs font-medium">
                            <li>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li

                                    className={`block size-8 rounded border ${
                                        currentPage === index + 1 ? 'bg-blue-600 text-white' : 'border-blue-600 text-gray-900'
                                    } text-center leading-8 cursor-pointer`}
                                >
                                    <button
                                        onClick={() => setCurrentPage(index + 1)}
                                        key={index}
                                        disabled={currentPage === index + 1}
                                    >
                                    {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
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
                    </div>
                )}
            </div>
        </>

    )
}
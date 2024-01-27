// import React from "react";
import PropTypes from "prop-types";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    // flex flex-col items-center  gap-y-3  md:flex-row justify-between md:items-end py-8 border-t border-grey-100  dark:border-neutral-400
    <div
      className={`py-8 flex md:justify-end justify-center`}
    >
      <div className={`flex items-center gap-x-2`}>
        {/* <button
          className='flex items-center gap-x-1 text-sky-500 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:text-neutral-700'
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          <IoIosArrowBack
            className={`fill-sky-500 mb-0.5 ${page <= 1 ? "fill-neutral-400 dark:fill-neutral-700" : ""
              }`}
          />
          <span className='mb-1  text-sm md:text-base'>Previous</span>
        </button> */}
        <div className='space-x-2'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (btn) => (
              <button
                key={`${btn}-i`}
                className={`${page === btn
                  ? "bg-[#109BE9] text-neutral-50"
                  : " dark:bg-[#c3b7b7]"
                  }  px-3 transition-colors duration-300`}
                onClick={() => setPage(btn)}
              >
                {btn}
              </button>
            )
          )}
        </div>
        {/* <button
          className='flex items-center gap-x-1 text-sky-500  disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:text-neutral-700'
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          <span className='mb-1 text-sm md:text-base '>Next</span>
          <IoIosArrowForward
            className={`fill-sky-500 mb-0.5 ${page >= totalPages
              ? "fill-neutral-400 dark:fill-neutral-700"
              : ""
              }`}
          />
        </button> */}
      </div>
      {/* <p className='mb-[7px]'>
        Page {page} of {totalPages}
      </p> */}
    </div>

  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  dataPerPage: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Pagination;



// const renderPageButtons = () => {
//   const buttons = [];
//   const totalButtons = 3;

//   for (let i = 1; i <= totalPages; i++) {
//     if (
//       i <= totalButtons ||
//       i > totalPages - totalButtons ||
//       (i >= page - 1 && i <= page + 1)
//     ) {
//       buttons.push(
//         <button
//           key={`${i}-btn`}
//           className={`${
//             page === i
//               ? "bg-blue-500 text-neutral-50"
//               : "bg-neutral-200 dark:bg-neutral-700"
//           }  px-3 py-2 transition-colors duration-300 mr-1`}
//           onClick={() => setPage(i)}
//         >
//           {i}
//         </button>
//       );
//     } else if (
//       (i === totalButtons + 1 && page > totalButtons + 2) ||
//       (i === totalPages - totalButtons &&
//         page < totalPages - totalButtons - 1)
//     ) {
//       buttons.push(
//         <button
//           key={`${i}-ellipsis`}
//           className="px-3 py-2 bg-neutral-200 dark:bg-neutral-700 transition-colors duration-300 mr-1"
//           disabled
//         >
//           ...
//         </button>
//       );
//     }
//   }

//   return buttons;
// };


// <div className="justify-between md:flex lg:flex items-center px-4 my-10">
// <div>
//   <p className="hidden lg:block md:block mb-[7px]">
//     Page {page} of {totalPages}
//   </p>
// </div>
// <div className="text-center">{renderPageButtons()}</div>
// </div>
import React from 'react'

const ReportHead = () => {
  return (
    <div className="header   flex justify-between">
    <div className="flex  flex-col">
      <h1 className="font-raleway font-bold text-purple-900 text-4xl leading-10">
        Report Analytics
      </h1>
      <p className="font-urbanist font-medium text-gray-500 text-base leading-6">
        Some Helper text could be here
      </p>
    </div>

    <div className="flex items-center gap-4">
      <button className="flex items-center justify-center gap-1 rounded-md  h-8 w-48 border border-teal-500 text-teal-500 py-2 px-6 text-sm">
        <svg
          className="w-3 h-4"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.50057 8.93063C6.42009 8.93063 6.3442 8.91067 6.27752 8.87539C6.25595 8.86401 6.23521 8.85094 6.21552 8.83627C6.19176 8.81861 6.16966 8.79881 6.14951 8.77714L4.28875 6.89316C4.10138 6.70288 4.10202 6.39546 4.29003 6.20646C4.47868 6.01746 4.78283 6.01746 4.9702 6.20774L6.01932 7.27038V0.652041C6.01932 0.384093 6.23492 0.166626 6.50057 0.166626C6.76622 0.166626 6.98182 0.384093 6.98182 0.652041V7.27038L8.03094 6.20774C8.21831 6.01746 8.52246 6.01746 8.71111 6.20646C8.89912 6.39546 8.89976 6.70288 8.71239 6.89316L6.85162 8.77714C6.83147 8.79881 6.80938 8.81861 6.78562 8.83627C6.70581 8.89557 6.60722 8.93063 6.50057 8.93063ZM2.92917 12.125H10.0773C11.6424 12.125 12.9167 10.8402 12.9167 9.26103V6.1C12.9167 4.51755 11.6404 3.22959 10.0716 3.22959H9.47353C9.20788 3.22959 8.99227 3.44705 8.99227 3.715C8.99227 3.98295 9.20788 4.20042 9.47353 4.20042H10.0716C11.1091 4.20042 11.9542 5.05215 11.9542 6.1V9.26103C11.9542 10.3043 11.1117 11.1541 10.0773 11.1541H2.92917C1.89031 11.1541 1.04587 10.3024 1.04587 9.25455V6.09288C1.04587 5.04892 1.88774 4.20042 2.92339 4.20042H3.5272C3.79285 4.20042 4.00845 3.98295 4.00845 3.715C4.00845 3.44705 3.79285 3.22959 3.5272 3.22959H2.92339C1.35708 3.22959 0.083374 4.51367 0.083374 6.09288V9.25455C0.083374 10.8377 1.36029 12.125 2.92917 12.125Z"
            fill="#00B0AD"
          />
        </svg>
        Download Reports
      </button>
      <input
        className="flex items-center rounded-md  h-8 w-48 border placeholder:text-gray-600 placeholder:text-sm" placeholder="Select a date"
        type="date"
      />
    </div>
  </div>
  )
}

export default ReportHead
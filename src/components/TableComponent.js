import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import PopperMenu from './PopperMenu';

const TableComponent = ({ headings, data, deleteEmployeeHandler }) => {
  return (
    <>
      <div className=" pt-6 pb-6" style={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}>
        <table className="table-auto min-w-full  divide-gray-200">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => {
              return <tr key={idx}
                style={{ borderTop: '1px solid #e5e7eb' }}
              >
                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  {
                    val.FirstName
                  }
                </td>
                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  {
                    val.DOB
                  }
                </td>

                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  {
                    val.StartDate
                  }
                </td>
                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  {
                    val.EndDate
                  }
                </td>

                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  {
                    val.Description
                  }
                </td>
                <td
                  className="px-6 py-4 whitespace-no-wrap "
                >
                  <PopperMenu data={val} deleteEmployeeHandler={deleteEmployeeHandler} />
                </td>
              </tr>
            }
            )}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default TableComponent;

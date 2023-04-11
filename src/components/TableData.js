import React from 'react';

const TableData = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full text-black">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Film</th>
                        <th>Genre</th>
                        <th>Lead Studio</th>
                        <th>Audience score %</th>
                        <th>Profitability</th>
                        <th>Rotten Tomatoes %</th>
                        <th>Worldwide Gross</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
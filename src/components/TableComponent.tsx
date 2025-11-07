type TableBodyType = {
  profile: {
    name: string;
    website: string;
  };
  FBLikes: number;
  FBTrend: number;
  GAClicks: number;
  GATrend: number;
};

export type TableRowReport = {
  name: string;
  client: string;
  type: string;
  created: string;
  schedule: string;
  scheduleStatus: string;
  clientGroup: string;
  lastSent: string;
  nextSendDate: string;
  awaitingApproval: boolean;
  lastSentStatus: string;
  
};

type TableType = {
  header: string[];
  bodyData: TableBodyType[] | TableRowReport[];
};

function TableComponent({ header, bodyData }: TableType) {
  const isReportTable = (row: any): row is TableRowReport => "client" in row;

  return (
    <div className="border w-full rounded-[0.7rem] overflow-hidden">
      <div className="h-[76vh] overflow-auto">
        <table className="w-full table-auto min-w-max">
          <thead className="bg-gray-50 border-b sticky top-0 z-10">
            <tr className="text-left uppercase">
              {header.map((h, i) => (
                <th
                  key={h}
                  className={`${i === 0 ? "pl-6" : "pl-2"} pr-6 py-3 font-medium text-sm text-gray-500 whitespace-nowrap bg-gray-50`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {bodyData.map((row, index) => (
              <tr key={index} className="h-16 border-b border-gray-200">
                {/* Conditional Rendering Based on Table Type */}
                {isReportTable(row) ? (
                  <>
                    <td className="pl-6 pr-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.client}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.type}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.created}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.schedule}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.scheduleStatus}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.clientGroup}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.lastSent}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.nextSendDate}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.awaitingApproval ? "Yes" : "No"}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.lastSentStatus}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="pl-6 pr-6 whitespace-nowrap">
                      <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-xs font-medium">
                          {row.profile.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {row.profile.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {row.profile.website}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.FBLikes}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.FBTrend}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.GAClicks}
                    </td>
                    <td className="pl-2 pr-6 text-sm text-gray-600 whitespace-nowrap">
                      {row.GATrend}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;

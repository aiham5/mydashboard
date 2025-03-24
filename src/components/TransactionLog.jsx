import { DataGrid } from "@mui/x-data-grid";

// Define columns for the DataGrid
const columns = [
  { field: "txId", headerName: "Transaction ID", width: 150 },
  { field: "user", headerName: "User", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "cost", headerName: "Cost", width: 150 },
];

const TransactionLog = ({ transactions }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={transactions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.txId} // Use txId as the unique ID for each row
      />
    </div>
  );
};

export default TransactionLog;

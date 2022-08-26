import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { Footer } from "antd/lib/layout/layout";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../utils/constants";
import { deleteTransaction } from "../../context/TransactionReversal";

<<<<<<< Updated upstream



const { ethereum } = window;

const Datatable = () => {

=======
const Datatable = () => {
>>>>>>> Stashed changes
  const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
<<<<<<< Updated upstream
  
    return transactionsContract;
  };

  const sta = ["PENDING", "COMPLETED", "CANCELLED"];
=======
>>>>>>> Stashed changes
  
    return transactionsContract;
  };

  const {transactions,setformData } = useContext(TransactionContext);
  const handleDelete = async (id) => {
<<<<<<< Updated upstream

    const transactionsContract = createEthereumContract();
    
    const rows=transactions.map((transaction, i) => (  
      {   
=======
    const transactionsContract = createEthereumContract();

    const rows=transactions.map((transaction, i) => ({   
>>>>>>> Stashed changes
      id: i,
      username: transaction.addressFrom,
      status: sta[transaction.status],
      email: transaction.name,
      age: transaction.amount,
      gonderimTarihi:transaction.investmentNo
<<<<<<< Updated upstream
      }))
      
      const transactionDeleted = await transactionsContract.reverseInvesment(rows[id].gonderimTarihi);

      await transactionDeleted.wait();
=======
    }))
>>>>>>> Stashed changes

    const transactionDeleted = await transactionsContract.reverseInvesment(rows[id].gonderimTarihi);
    await transactionDeleted.wait();

<<<<<<< Updated upstream
      window.location.reload();
      
=======
    console.log(`Loading - ${transactionDeleted.hash}`);
    await transactionDeleted.wait();
    console.log(`Success - ${transactionDeleted.hash}`);
>>>>>>> Stashed changes

    window.location.reload();
  };

  const resendState = {
    "amount":"",
    "nickName":"",
  }
<<<<<<< Updated upstream
  const handleResend = (id) => {
   
=======

  const handleResend = (id) => {
>>>>>>> Stashed changes
    const rows=transactions.map((transaction, i) => (  
      {   
        id: i,
        username: shortenAddress(transaction.addressTo),
        status: "active",
        email: "1snow@gmail.com",   
        age: transaction.amount,
        gonderimTarihi:transaction.investmentNo
      }))

    setformData((prevState) => ({ "addressTo": rows[id].gonderimTarihi ,"nickName": rows[id].email}));  
  };

  const handleEdit = async (id) => {
    const rows=transactions.map((transaction, i) => ({   
      id: i,
      username: transaction.addressFrom,
      status: sta[transaction.status],
      email: transaction.name,
      age: transaction.amount,
<<<<<<< Updated upstream
      gonderimTarihi:transaction.investmentNo,
      }))
=======
      invesNo:transaction.investmentNo,
      gonderimTarihi:transaction.gonderimTarihi
    }))
>>>>>>> Stashed changes

    setformData((prevState) => ({ "addressTo": rows[id].invesNo, "nickName": rows[id].email, "amount": rows[id].age, "gonderimTarihi": rows[id].gonderimTarihi}));
  };

  const actionColumn = [{
    field: "değişiklik",
    headerName: "Düzenle",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/edit" style={{ textDecoration: "none" }}>
            <div className="viewButton" onClick={() => handleEdit(params.row.id)}>Düzenle</div>
          </Link>
          <Link to="/users/newtransfer"  style={{ textDecoration: "none" }}>
            <div className="resendButton" 
            onClick={() => handleResend(params.row.id)}>Tekrar Gönder </div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
            Sil
          </div>
        </div>
      );
    },
  },];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Gönderilenler
        <Link to="/users/newtransfer" className="link">
          Yeni Yatırım Oluştur<i></i>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={transactions.map((transaction, i) => (  
          {   
          id: i,
          username: transaction.addressFrom,
          status: sta[transaction.status],
          email: transaction.name,
          age: transaction.amount,
          gonderimTarihi:transaction.gonderimTarihi,
          invesmentNo: transaction.investmentNo,
          }))}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Datatable;
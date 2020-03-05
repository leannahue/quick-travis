import React, { useState, useEffect } from "react";
import { Container, Dialog, DialogTitle, Button } from "@material-ui/core";
import TopAppBar from "./components/TopAppBar";
import ItemForm from "./components/ItemForm";
import ProductList from "./components/ProductList";
import { updateUserState } from "./utils/FirebaseAuthUtils";
import { getUserProductsInfo, getAllProductInfo, addRole, getRole, addUserInfo } from "./utils/FirebaseDbUtils"
import "./App.css";
import Listings from "./components/Listings/Listings";


const App = () => {
  const [user, setUser] = useState(null);
  const [productIds, setProductIds] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = React.useState('product')

  const handleClose = () => {
    setOpen(false)
  };

  const ChooseRole = ({ user }) => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="simple-dialog-title" style={{ textAlign: 'center' }}>Choose Your Role</DialogTitle>
        <Button variant="contained" color="primary" style={{ width: '50%', marginLeft: '25%' }} onClick={() => { addRole(user.uid, "seller"); getRole(user.uid, setUserRole); handleClose() }}>
          Seller
      </Button>
        <Button variant="contained" color="primary" style={{ marginTop: '5px', marginBottom: '5px', width: '50%', marginLeft: '25%' }} onClick={() => { addRole(user.uid, "buyer"); getRole(user.uid, setUserRole); handleClose() }}>
          Buyer
      </Button>
      </Dialog>
    )
  }

  // Change user state when the user successfully logged in
  useEffect(() => {
    updateUserState(setUser);
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     getRole(user.uid, setUserRole);
  //   }
  // }, [user]);

  useEffect(() => {
    if (user && !userRole) {
      setOpen(true);
      addUserInfo(user);
    }
  });

  useEffect(() => {
    if (userRole) {
      if (userRole === "buyer") {
        getAllProductInfo(setProductIds)
      }
      if (userRole === "seller") {
        getUserProductsInfo(user.uid, setProductIds)
      }
    }
  }, [userRole]);

  return (
    <Container disableGutters>
      <div style={{ height: '10px' }} />
      <ChooseRole user={user} />
      <TopAppBar user={user} userRole={userRole} setPage={setPage} />
      {
        page === 'product' ?
          <div>
            <ItemForm userRole={userRole} />
            <ProductList productIds={productIds} user={user} userRole={userRole} />
          </div> : null
      }
      {
        page === 'bid' ?
          <Listings productIds={productIds} /> : null
      }
    </Container>
  );
};

export default App;

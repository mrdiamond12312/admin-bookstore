import React from "react"
import Nav from "../comp/Nav/nav"
// import Main from "../comp/Books/main"
// import Header from "../comp/header/header"
import Customers from "./admin/customer/customers"
import CreateAccount from "./admin/create-account/createAccount"
import ManageBooks from "./admin/manage-books/manageBooks"
import {
    BrowserRouter,
    Routes as Switch,
    Route,
    // Link
} from "react-router-dom";

export default function App() {
    return (
        <div className="page">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path="/admin/accounts" element={<Customers />} />
                    <Route path="/admin/create-account" element={<CreateAccount />} />
                    <Route path="/admin/shop" element={<ManageBooks />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
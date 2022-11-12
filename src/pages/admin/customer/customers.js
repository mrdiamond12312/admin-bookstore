import React, { Component } from 'react'
import Header from '../../../comp/header/header.js'
import Table from './table'
export default class Customers extends Component {
    render() {
        return (
            <div className="main">
                <Header title="Danh sách tài khoản" searchbarPH="Tìm kiếm người dùng" />
                <div className="content"><Table /></div>
            </div>
        )
    }
}

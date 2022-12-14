import React, { Component } from 'react'

class AdminOption extends Component {
    render() {
        return (
            <div className="ad--option">
                <button type="button" className="del"><img src={process.env.PUBLIC_URL + "/admin/table/admin-option/del.png"} alt=""></img>Vô hiệu hóa TK</button>
                <button type="button" className="per"><img src={process.env.PUBLIC_URL + "/admin/table/admin-option/per.png"} alt=""></img>Phân quyền</button>
            </div>
        );
    }
};

class TableRow extends Component {
    render() {
        let key = 0;
        console.log(this.props.info);
        return (
            <div className={this.props.type}>
                {
                    this.props.info.map(infoPiece => {
                        return (infoPiece === "Tùy chọn" && this.props.type === "row") ? <div className="divTableCell" key={key++}><AdminOption /></div> :
                            <div className="divTableCell" key={key++}>{infoPiece}</div>;
                    })
                }
                {/* <div class="divTableCell">&nbsp;Họ v&agrave; t&ecirc;n</div>
                <div class="divTableCell">&nbsp;Số CMND</div>
                <div class="divTableCell">&nbsp;Loại t&agrave;i khoản</div>
                <div class="divTableCell">&nbsp;T&ugrave;y chọn</div> */}
            </div>
        )
    }
};

export default class Table extends Component {
    render() {
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <TableRow type="header" info={["", "Họ và tên", "Giới tính", "Email", "Địa chỉ", "SĐT", "Số CMND", "Loại tài khoản", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />
                    <TableRow type="row" info={["", "Hoàng Kim Cương", "Nam", "hoangkimc93@gmail.com", "25 đường 13, p Long Bình, Quận 9, TP Thủ Đức", "0352 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"]} />

                </div>
            </div>
        )
    }
};

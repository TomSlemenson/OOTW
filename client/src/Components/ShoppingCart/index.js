import React, { Component } from "react";
import { MDBIcon, MDBTooltip, MDBTable, MDBInput, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import './index.css'

class ShoppingCart extends Component {
    state = {
        modal: false,
        data: [
            {
                title: "iPhone",
                price: "800",
                qty: "2"
            },
            {
                title: "Headphones",
                price: "200",
                qty: "4"
            },
            {
                title: "iPad Pro",
                price: "600",
                qty: "2"
            },

        ],
        columns: [
            {
                label: <strong>Product</strong>,
                field: 'product'
            },
            {
                label: <strong>Price</strong>,
                field: 'price'
            },
            {
                label: <strong>QTY</strong>,
                field: 'qty'
            },
            {
                label: <strong>Amount</strong>,
                field: 'amount'
            },
            {
                label:  <MDBBtn className="css_updateButtom" color="" size="sm"> <strong>Update</strong></MDBBtn>,
                field: 'button'
            }
        ]
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        const rows = [];
        const { columns, data } = this.state;

        data.map(row => {
            return rows.push(
                {
                    'product': <strong>{row.title}</strong>,
                    'price': <strong>${row.price}</strong>,
                    'qty':
                        <MDBInput type="number" default={row.qty} className="form-control" 
                        style={{marginTop:"-35.5px", color:"white", width:"40px"}}/>,
                    'amount': <strong>${row.qty * row.price}</strong>,
                    'button':
                        <MDBTooltip placement="top">
                            <MDBBtn color="" size="sm" className="css_deleteItemButtom">
                                <MDBIcon far icon="trash-alt" />
                            </MDBBtn>
                            <div>Remove item</div>
                        </MDBTooltip>
                }
            )
        });

        return (<div>

            <MDBTooltip clickable className="css_cartmain" placement="bottom">
                <MDBBtn color="danger" style={{backgroundImage: "url('/assets/images/bg.jpg')", border: '1px solid grey' }} size="sm"><MDBIcon icon="shopping-cart"></MDBIcon></MDBBtn>

                <MDBTable>
                    <MDBTableHead className="font-weight-bold" color="" columns={columns} />
                    <MDBTableBody className="m-auto css_tableCart" rows={rows} />
                </MDBTable>
            </MDBTooltip>
        </div>
        );
    }
}

export default ShoppingCart;
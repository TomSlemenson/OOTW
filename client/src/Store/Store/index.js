import React, { Component } from "react";
import { MDBRow, MDBSelect, MDBIcon, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBContainer } from "mdbreact";
import Payment from '../../Components/Payment/index.js'
import Carousel from '../../Components/Carousel/index.js'
import ShoppingCart from '../../Components/ShoppingCart/index.js'
import "./index.css";




class Store extends Component {
    constructor(props) {
        super(props)
        this.itemsForSaleRef = React.createRef()
        this.state = {
            itemOnShoppingCart: [],
            itemsForSale: [
                {
                    name: "Grey Sweater",
                    src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
                    price: 40,
                    sizeOptions: [
                        'SM,2',
                        'MD,2',
                        'LG,2',
                        'XL,2',
                    ]
                },
                {
                    name: "Grey Sweater 2",
                    src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
                    price: 40,
                    sizeOptions: [
                        'SM,2',
                        'MD,2',
                        'LG,2',
                        'XL,2',
                    ]
                },
                {
                    name: "Grey Sweater 3",
                    src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
                    price: 40,
                    sizeOptions: [
                        'SM,2',
                        'MD,2',
                        'LG,2',
                        'XL,2',
                    ]
                },
                {
                    name: "Grey Sweater 4",
                    src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
                    price: 40,
                    sizeOptions: [
                        'SM,2',
                        'MD,2',
                        'LG,2',
                        'XL,2',
                    ]
                },
            ],

            options: [
                {
                    text: "SM",
                    value: "0"
                },
                {
                    text: "MD",
                    value: "1"
                },
                {
                    text: "LG",
                    value: "2"
                },
                {
                    text: "XL",
                    value: "3"
                }
            ]
        }
    }



    addOneLogic(selectedSizeId, item, selectedItemId) {
        if (parseInt(item.sizeOptions[selectedSizeId].split(',')[1]) <= 0) {
            alert(`Sorry "${this.state.itemsForSale[selectedItemId].name}" is Out Of Stock`)
        } else {
                this.state.itemOnShoppingCart.push({
                    name: item.name,
                    price: item.price,
                    size: item.size,
                })
                this.state.itemsForSale[selectedItemId].sizeOptions[selectedSizeId] = item.sizeOptions[selectedSizeId].split(',')[0] + ',' + (parseInt(item.sizeOptions[selectedSizeId].split(',')[1]) - 1)
                console.log(this.state.itemsForSale[selectedItemId].sizeOptions) 
        }
    }

    addOne(e) {
        let selectedItemId = e.target.id
        let item = this.state.itemsForSale[selectedItemId]
        item.size = e.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[0].children[1].value;
        if (item.size == "sizes") {
            alert('Please Select a size!')
        } else if (item.size == "SM") {
            let selectedSizeId = 0
            this.addOneLogic(selectedSizeId, item, selectedItemId);
        } else if (item.size == "MD") {
            let selectedSizeId = 1
            this.addOneLogic(selectedSizeId, item, selectedItemId);
        } else if (item.size == "LG") {
            let selectedSizeId = 2
            this.addOneLogic(selectedSizeId, item, selectedItemId);
        } else if (item.size == "XL") {
            let selectedSizeId = 3
            this.addOneLogic(selectedSizeId, item, selectedItemId);
        }
        console.log(this.state.itemOnShoppingCart)
    }

    removeOne = e => {
        for (let c = 0; c < this.state.itemOnShoppingCart.length; c++) {
            if (this.state.itemOnShoppingCart[c].name === this.state.itemsForSale[e.target.id].name &&
                this.state.itemOnShoppingCart[c].size === this.state.itemsForSale[e.target.id].size &&
                 this.state.itemOnShoppingCart.length > 0 ) {
                
                for (let s = 0; s < this.state.itemsForSale[e.target.id].sizeOptions.length; s++) {
                    if(this.state.itemsForSale[e.target.id].sizeOptions[s].split(',')[0] == this.state.itemOnShoppingCart[c].size){
                        
                    this.state.itemsForSale[e.target.id].sizeOptions[s] = this.state.itemsForSale[e.target.id].sizeOptions[s].split(',')[0] + ',' + (parseInt(this.state.itemsForSale[e.target.id].sizeOptions[s].split(',')[1]) + 1)
                    console.log(this.state.itemsForSale[e.target.id].sizeOptions)   
                    }   
                }
                this.state.itemOnShoppingCart.splice(this.state.itemOnShoppingCart.indexOf(this.state.itemsForSale[e.target.id]), 1)
                break;
            }
        }
    }
    selectSize(e) {
        this.state.itemsForSale[e.target.id].size = e.target.value
    }


    render() {
        return (<div className="text-center css_StorePage">
            <Carousel />

            <MDBContainer>
                <MDBRow className="css_totalPlusCart">
                    <div className="css_Cart" >
                        <ShoppingCart /></div>
                    <small className="css_totalText">Your Total: $100,00</small>
                </MDBRow>
                <MDBRow className="css_checkoutButtom" style={{ paddingRight: '12px' }}>
                    <Payment />
                </MDBRow>

            </MDBContainer>
            <MDBContainer className="" style={{ padding: '20px 20px 0px 20px' }}>

                <section ref={this.itemsForSaleRef} className="text-center pb-5 css_storeContainer">
                    <MDBRow>
                        {this.state.itemsForSale.map((e, index) => {

                            return <MDBCol key={index} lg="3" md="6" className="ml-xs-0 mr-xs-0 mb-lg-0 mb-4">
                                <MDBCard
                                    className="css_card" >
                                    <button onClick={(e) => this.removeOne(e)} className="css_minusButtom" size="sm"><MDBIcon id={index} icon="minus" /></button>
                                    <button onClick={(e) => this.addOne(e)} className="css_plusButtom" size="sm"><MDBIcon id={index} icon="plus" /></button>
                                    <MDBCardImage
                                        src={e.src}
                                        top
                                        alt="sample photo"
                                        overlay="white-slight"
                                        className="css_images" />
                                    <MDBCardBody className="text-center css_cardBody">
                                        <strong>{e.name}</strong>
                                        <MDBCol size={5} className="css_sizeInput">
                                            <MDBSelect
                                                className="mb-0"
                                                options={this.state.options}
                                                selected="sizes"
                                                id={index}
                                                getValue={this.handleSelectChange}
                                            />
                                        </MDBCol>
                                        <strong className="css_price">{e.price}</strong>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        })}

                    </MDBRow>
                </section>

            </MDBContainer>
        </div >

        );
    }
}

export default Store;



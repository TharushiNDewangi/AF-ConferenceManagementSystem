
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions/';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
//create products function
const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDiscription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);

    const dispatch = useDispatch();


    const handleForm= () => {
        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for (let pic of productPictures) {
            form.append('productpicture', pic);
        }

        dispatch(addProduct(form));


        setShow(false);
    }
    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPictures = (e) => {

        setProductPictures([
            ...productPictures,
            e.target.files[0]

        ]);
    }
    console.log(productPictures);
    //render product details
    const renderProducts = () => {
        return (
            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                       
                        <th>Category</th>

                    </tr>
                </thead>
                <tbody>{

                    product.products.length > 0 ?
                        product.products.map(product =>
                            <tr onClick={() => showProductDetailModal(product)}
                                key={product._id}>
                                
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            
                                <td>{product.category.name}</td>
                                <td>
                                    <button  onClick={()=>{
                                        const payload={
                                            productId:product._id,
                                        };
                                        dispatch(updateproductbyid(payload))
                                    }}>UPDATE
                                    </button>
                                    <button
                                    onClick={()=>{
                                        const payload={
                                            productId:product._id,
                                        };
                                        dispatch(deleteproductbyid(payload))
                                    }}>
                                    DELETE
                                    </button>
                                </td>

                            </tr>) : null
                }
                </tbody>
            </Table>
        );
    }
    // rendering product to db
    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleForm}
                modalTitle={'Add New Product'}>
                <Input
                    label="Name"
                    value={name}
                    placeholder={`Product Name`}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    label="Price"
                    value={price}
                    placeholder={`Price`}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    placeholder={`Description`}
                    onChange={(e) => setDiscription(e.target.value)}
                />
                <select className="form-control"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}>
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
                </select>

                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }


                <input type="file" name="ProductPicture" onChange={handleProductPictures} />
            </Modal>


        );
    }
    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }
//show product detail modal
    const showProductDetailModal = (product) => {

        setProductDetails(product);
        setProductDetailModal(true);
        console.log(product);

    }
    const renderProductDetailsModal = () => {

        if (!productDetails) {
            return null;
        }
        
        return (
            <Modal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'product details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="key">{productDetails.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{productDetails.quantity}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="key">{productDetails.category.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="key">{productDetails.description}</p>
                    </Col>

                </Row>
                <Row>
                    <Col >
                        <label className="key"> product Pictures</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer">
                                    <img src={generatePublicUrl(picture.img)} />
                                </div>

                            )}
                        </div>

                    </Col>
                </Row>


            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Products</h3>
                            <button onClick={handleShow} >ADD</button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>

                </Row>
            </Container>
            {renderAddProductModal()}
            {renderProductDetailsModal()}
           

        </Layout>
    )
}

export default Products
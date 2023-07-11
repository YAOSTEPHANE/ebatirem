import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";


const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"OurStore"} />
            <BreadCrumb title='Our Store' />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Maison en Vente</li>
                                        <li>Achat de Terrain</li>
                                        <li>Maison à Louer</li>
                                        <li>Construction</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By </h3>
                                <div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox'
                                                value="" id='' />
                                            <label className='form-check-label' htmlFor=''>
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox'
                                                value="" id='' />
                                            <label className='form-check-label' htmlFor=''>
                                                Out of Stock(0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="To" />
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <div className='d-flex flex-wrap'>
                                            <ul className='colors ps-0'>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Type</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox'
                                                value="" id='type-1' />
                                            <label className='form-check-label' htmlFor='type-1'>
                                                Duplex (2)
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox'
                                                value="" id='type-2' />
                                            <label className='form-check-label' htmlFor='type-2'>
                                                Basse (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product Tags</h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Villa Duplex</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Villa Basse</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Villa Eco</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Terrain</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            A Louer</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Construction</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Meuble</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random Product</h3>
                                <div>
                                    <div className='random-products d-flex mb-3'>
                                        <div className='w-50'>
                                            <img src='images/Container Shelter _CGI.jpeg'
                                                className='img-fluid' alt='Villa' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Villa Duplex pieces avec
                                                une Superficie de 950 m2
                                            </h5>
                                            <ReactStars count={5} size={24} value={4}
                                                edit={false} activeColor="#ffd700" />
                                            <b>500 millions FCFA</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/IMG-20230705-WA0028.jpg'
                                                className='img-fluid' alt='Villa' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Materiaux de Construction de
                                                super qualité
                                            </h5>
                                            <ReactStars count={5} size={24} value={4}
                                                edit={false} activeColor="#ffd700" />
                                            <b>A partir de 1500 FCFA</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-iterms-center gap-10'>
                                        <p className='mb-0 d-block' style={{ wight: "100px" }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best-selling</option>
                                            <option value="title-ascending">Alphabetically A-Z</option>
                                            <option value="title-descending">Alphabetically Z-A</option>
                                            <option value="price-ascending">Price, low to hight</option>
                                            <option value="price-descending">Price, hight to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>21 Products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => {
                                                setGrid(3);
                                            }}
                                                src="images/menu (3).png" className='d-block img-fluid' atl="grid" />
                                            <img onClick={() => {
                                                setGrid(4);
                                            }} src="images/menu (2).png" className='d-block img-fluid' atl="grid" />
                                            <img onClick={() => {
                                                setGrid(6);
                                            }}
                                                src="images/lines.png" className='d-block img-fluid' atl="grid" />
                                            <img onClick={() => {
                                                setGrid(12);
                                            }}
                                                src="images/menu.png" className='d-block img-fluid' atl="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                               <div className='d-flex'>
                               <ProductCard grid={grid} />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;

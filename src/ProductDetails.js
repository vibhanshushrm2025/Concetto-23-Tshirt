import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

    return (
        <Layout>
            <div className="row container mt-2">
                <div className="col-md-6">

                    <img
                        src="..public/images.jpg"
                        className="card-img-top"
                        alt="err"
                        style={{
                            objectFit: "contain",
                            height: "300px",
                            width: "300px"
                        }}
                    />
                </div>
                <div className="col-md-6 ">
                    <h1 className="text-center">Product Details</h1>
                    <div className="container-fluid row">
                        <div className="col-md-3">
                            <h6>Name </h6>
                            <h6>Description</h6>
                            <h6>Price</h6>
                            <h6>Category</h6>
                        </div>
                        <div className="col-md-9">
                            <h6>Conceto t shirt</h6>
                            <h6>high quality fabric</h6>
                            <h6> ₹300/-</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr />
        </Layout>
    );
export default ProductDetails;
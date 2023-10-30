import { useState } from "react";
import getImageUrl from "../utils/imageGetter";
import OrderList from "./AdminOrderList";
import { useSelector } from "react-redux";
import { axiosCreateProduct } from "../https/product";

function AdminOrder({ info }) {
  const user = useSelector((state) => state.user);
  const [addProductModal, setAddProductModal] = useState(false);
  const [confirmAddModal, setConfirmAddModal] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [productImage, setProductImage] = useState();
  const [file, setFile] = useState();
  const [addError, setAddError] = useState();
  const [addBody, setAddBody] = useState();

  const addProductModalHandler = () => {
    setAddProductModal((state) => !state);
  };

  const confirmAddModalHandler = () => {
    setConfirmAddModal((state) => !state);
    setAddError("");
    setAddSuccess(false);
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  const addProductSubmit = (e) => {
    e.preventDefault();
    let categoryId = null;
    if (e.target.productCategory.value === "Favorite Product") categoryId = 1;
    if (e.target.productCategory.value === "Coffee") categoryId = 2;
    if (e.target.productCategory.value === "Non Coffee") categoryId = 3;
    if (e.target.productCategory.value === "Foods") categoryId = 4;
    if (e.target.productCategory.value === "Add-On") categoryId = 5;

    const body = {
      product_name: e.target.productName.value,
      description: e.target.productDesc.value,
      price: e.target.productPrice.value,
      category_id: categoryId,
    };

    let data = new FormData();
    data.append("product-image", file);
    data.set("product_name", body.product_name);
    data.set("description", body.description);
    data.set("price", body.price);
    data.set("category_id", body.category_id);

    setConfirmAddModal((state) => !state);
    setAddBody(data);
    // for (const pair of data.entries()) console.log(pair);
  };
  //   console.log(file);

  const saveNewProduct = async () => {
    const formData = addBody;
    const jwt = user.token;
    console.log(formData);
    try {
      const result = await axiosCreateProduct(formData, jwt);
      setAddSuccess((state) => !state);
      console.log(result);
    } catch (error) {
      console.log(error);
      setAddError(error.response.data.msg);
    }
  };

  return (
    <>
      {/* <section className={"modal h-full w-[81.8%] absolute right-0 flex justify-end items-center bg-black/75 z-[2] " + (addProductModal ? "" : "hidden")}>
        <div className="modal-cont bg-white shadow-lg h-full w-[50%] lg:w-[50%] p-[15px] md:p-[28px] flex flex-col gap-[30px]">
          <div className="flex justify-between items-center">
            <p className="modal-text text-3xl md:text-2xl font-medium">Add Product</p>
            <img src={getImageUrl("XCircle", "svg")} alt="xcircle" onClick={addProductModalHandler} className="cursor-pointer" />
          </div>
          <form className="flex flex-col gap-[30px]" onSubmit={addProductSubmit}>
            <div className="flex flex-col gap-[8px]">
              <p className="text-color-2 text-sm, font-semibold">Photo Product</p>
              <div className="w-[50px] h-[50px] rounded-md bg-[#e8e8e8] flex justify-center items-center">
                <img src={productImage ? productImage : getImageUrl("noImage", "svg")} alt="noImage" className="rounded-md" />
              </div>
              <label htmlFor="productImage" className="py-3 px-[18px] text-color-2 text-xs font-medium bg-color-1 hover:bg-color-1-hover cursor-pointer w-min rounded-md">
                Upload
              </label>
              <input type="file" name="" id="productImage" className="hidden" onChange={onImageChange} />
            </div>
            <label htmlFor="productName" className="text-color-2 text-sm font-semibold">
              Product Name
            </label>
            <input type="text" id="productName" placeholder="Enter Product Name" className="mt-[-17px] p-[14px] border border-[#dedede] rounded-[8px] text-xs text-[#4f5665]" />
            <label htmlFor="productPrice" className="text-color-2 text-sm font-semibold">
              Price
            </label>
            <input type="text" id="productPrice" placeholder="Enter Product Price" className="mt-[-17px] p-[14px] border border-[#dedede] rounded-[8px] text-xs text-[#4f5665]" />
            <label htmlFor="productDesc" className="text-color-2 text-sm font-semibold">
              Description
            </label>
            <textarea id="productDesc" placeholder="Enter Product Description" className="h-[114px] mt-[-17px] p-[14px] border border-[#dedede] rounded-[8px] text-xs text-[#4f5665] overflow-visible" />
            <label htmlFor="productCategory" className="text-color-2 text-sm font-semibold">
              Product Category
            </label>
            <input type="text" id="productCategory" placeholder="Enter Product Category" className="mt-[-17px] p-[14px] border border-[#dedede] rounded-[8px] text-xs text-[#4f5665]" />
            <button type="submit" className="py-3 px-[18px] text-color-2 text-sm font-medium bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-md">
              Save Product
            </button>
          </form>
        </div>
      </section>

      <section className={"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/75 z-[2] " + (confirmAddModal ? "" : "hidden")}>
        <div className="modal-cont border-2 border-color-1 bg-white rounded shadow-lg w-[95%] lg:w-2/3 p-[15px] md:p-10 flex flex-col items-center justify-between gap-9">
          {addSuccess ? (
            <div className="w-full">
              <div className="text-center">
                <p className="text-3xl font-semibold">Success Add New Product</p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
                <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium" onClick={confirmAddModalHandler}>
                  Ok
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-center">
                <p className="text-3xl font-semibold">Save New Product?</p>
                <p className="text-[#d00000]">{addError}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
                <button type="submit" className="close-modal bg-white rounded-md w-full p-[10px] hover:bg-[#dedede] border border-color-1 text-lg font-medium" onClick={confirmAddModalHandler}>
                  Cancel
                </button>

                <button type="button" className="close-modal bg-color-1 rounded-md w-full p-[10px] hover:bg-color-1-hover text-lg font-medium" onClick={saveNewProduct}>
                  Yes
                </button>
              </div>
            </div>
          )}
        </div>
      </section> */}

      <section className="py-6 w-[82%] h-screen">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="mb-5 text-color-2 text-2xl font-medium">Order List</p>
            <div className="flex gap-[10px] bg-color-1 hover:bg-color-1-hover cursor-pointer p-3 rounded-md" onClick={addProductModalHandler}>
              <img src={getImageUrl("plus", "svg")} alt="plus" />
              <p className="text-color-2 text-sm font-medium">Add Order</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-[#4f5665] text-xs font-medium">Search Order</p>
            <div className="flex gap-[10px]">
              <div className="flex gap-[10px]">
                <input type="text" name="" id="" placeholder="Enter Order Number" className="p-[10px] border border-[#e8e8e8] rounded-l-md border-r-0" />
                <img src={getImageUrl("Search-black", "svg")} alt="search" className="border border-[#e8e8e8] rounded-r-md border-l-0 p-[10px]" />
              </div>
              <div className="flex gap-[10px] p-[10px] items-center bg-color-1 hover:bg-color-1-hover cursor-pointer rounded-md">
                <img src={getImageUrl("Filter", "svg")} alt="filter" />
                <p className="text-color-2 text-sm font-medium">Filter</p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-7 px-3 border border-[#e8e8e8] rounded-md">
          <div className="grid grid-cols-7 items-center py-3 border-b border-[#e8e8e8]/[.30]">
            <div className="w-4 h-4 border border-[#e8e8e8] rounded-md cursor-pointer"></div>
            <p className="text-center text-[#4f5665] text-xs font-semibold">No. Order</p>
            <p className="text-center text-[#4f5665] text-xs font-semibold">Date</p>
            <p className="text-center text-[#4f5665] text-xs font-semibold">Order</p>
            <p className="text-center text-[#4f5665] text-xs font-semibold">Status</p>
            <p className="text-center text-[#4f5665] text-xs font-semibold">Total</p>
            <p className="text-center text-[#4f5665] text-xs font-semibold">Action</p>
          </div>
          {info ? info.map((product, idx) => <OrderList key={idx} data={product} card={idx}></OrderList>) : <p className="text-2xl text-center">Product Not Found</p>}
          <section className="flex justify-between mt-[19px] items-center">
            <p className="text-[#4f5665] text-xs font-medium">Show x Orders of x Orders </p>
            <div className="flex gap-[20px] text-[#4f5665] text-xs font-medium">
              <p>Prev</p>
              <p className="active text-color-1">1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>Next</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default AdminOrder;

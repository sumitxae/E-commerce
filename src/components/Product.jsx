import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Product = ({ id, productName, price, productInfo, productImage }) => {
  const navigate = useNavigate();
  const [loader, setLoad] = useState(false);
  const buyProductHandler = async (event) => {
    event.preventDefault();
    setLoad(true);

    const {
      data: { order, user },
    } = await axios.post(
      "http://localhost:3000/payments/createOrder",
      { product_id: id },
      { withCredentials: true }
    );

    const {
      data: { key },
    } = await axios.post(
      "http://localhost:3000/payments/getKey",
      {},
      { withCredentials: true }
    );

    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sumit Choudhary",
      description: "Test Transactions",
      image:
        "https://imgs.search.brave.com/lP10OHi7cudP-yD1qXjuaVKwk-3bbk4UNy0Tnk56FJE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2E5/NjY5M2U2LWE4YjAt/NDcyNC05NTkyLTll/ZDk1ZjI0M2U5Yi9k/YzZzdzhnLTUxYTNi/YTIwLTBlZTYtNDI4/Ni04NDVlLTFjZjFl/MmZhM2IwYi5qcGcv/djEvZmlsbC93Xzgw/MCxoXzk2MCxxXzc1/LHN0cnAvY2hpYmlf/X19kYXphaV9vc2Ft/dV9ieV9jaGFvX2Rh/Yl9kYzZzdzhnLWZ1/bGx2aWV3LmpwZz90/b2tlbj1leUowZVhB/aU9pSktWMVFpTENK/aGJHY2lPaUpJVXpJ/MU5pSjkuZXlKemRX/SWlPaUoxY200NllY/QndPamRsTUdReE9E/ZzVPREl5TmpRek56/TmhOV1l3WkRReE5X/VmhNR1F5Tm1Vd0lp/d2lhWE56SWpvaWRY/SnVPbUZ3Y0RvM1pU/QmtNVGc0T1RneU1q/WTBNemN6WVRWbU1H/UTBNVFZsWVRCa01q/WmxNQ0lzSW05aWFp/STZXMXQ3SW1obGFX/ZG9kQ0k2SWp3OU9U/WXdJaXdpY0dGMGFD/STZJbHd2Wmx3dllU/azJOamt6WlRZdFlU/aGlNQzAwTnpJMExU/azFPVEl0T1dWa09U/Vm1NalF6WlRsaVhD/OWtZelp6ZHpobkxU/VXhZVE5pWVRJd0xU/QmxaVFl0TkRJNE5p/MDRORFZsTFRGalpq/RmxNbVpoTTJJd1lp/NXFjR2NpTENKM2FX/UjBhQ0k2SWp3OU9E/QXdJbjFkWFN3aVlY/VmtJanBiSW5WeWJq/cHpaWEoyYVdObE9t/bHRZV2RsTG05d1pY/SmhkR2x2Ym5NaVhY/MC5WUVQwWHZrYUtO/VHFEdnI2WVAtN0RO/VmNpNmlEb2NnOGhv/ZVBxcVV3NzZj",
      order_id: order.id,
      callback_url: "http://localhost:3000/payments/verifyPayment",
      prefill: {
        name: user.username,
        email: user.email,
      },
      notes: {
        address: "Earth",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
    setLoad(false);
  };

  return (
    <div className="no-underline w-11/12 lg:w-3/12 lg:mr-5">
      <div className="shadow-lg bg-slate-200 w-full cursor-pointer rounded-lg overflow-hidden m-4">
        <img
          src={productImage}
          alt={`${productName} thumbnail`}
          className="w-full h-full p-3 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{productName}</h2>
          <p className="text-gray-600 mb-2">Price: ₹{price}</p>
          <p className="text-gray-600 mb-2">{productInfo}</p>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={buyProductHandler}
              className="bg-[#152561] text-slate-50 px-2 py-1.5 rounded-lg"
            >
              {loader ? (
                <ClipLoader color="#e5eff3" /> // Add your loader here
              ) : (
                "Buy Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

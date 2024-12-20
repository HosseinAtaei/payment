import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Transaction({ data, updateCardAndHistory }) {
  const number = data.number;
  const cvv2 = data.cvv2;
  const month = data.month;
  const year = data.year;
  let total = data.total;
  const [destNumber, setDestNumber] = useState("");
  const [money, setMoney] = useState("");

  function handlerDestNumber(event) {
    const value = event.target.value;
    if (value.length <= 16) {
      setDestNumber(value);
    }
  }
  function handlerMoney(event) {
    const value = event.target.value;
    setMoney(value);
  }

  function transfer() {
    if (destNumber.length <= 15) {
      toast.error("Wrong Destionation Card Number");
    } else if (parseFloat(total) >= parseFloat(money)) {
      updateCardAndHistory(data, money, destNumber);
      setDestNumber("");
      setMoney("");
      toast.success("Successfully Transferred 🎉");
    } else {
      toast.error("Not Enough Money! 💩");
    }
  }

  return (
    <div className="pt-5">
      <div className="flex flex-col items-center">
        <div className="flex w-2/3 justify-around gap-5">
          <input
            className="outline-none text-center shadow-sm cursor-not-allowed w-1/2 py-2 mb-4"
            type="text"
            readOnly
            placeholder="Click On Your Card"
            value={number}
          />
          <span className="animate-pulse">➡️</span>
          <input
            className="outline-none w-1/2 text-center shadow-md border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="number"
            placeholder="Destination Card"
            value={destNumber}
            onChange={handlerDestNumber}
          />
        </div>
        <div className="flex gap-16 justify-center mt-6 w-2/3">
          <input
            className="outline-none text-center shadow-sm cursor-not-allowed w-1/12 py-2 mb-4"
            type="number"
            readOnly
            placeholder="CVV2"
            value={cvv2}
          />
          <input
            className="outline-none text-center shadow-sm cursor-not-allowed w-1/12 py-2 mb-4"
            type="number"
            readOnly
            placeholder="Month"
            value={month}
          />
          <input
            className="outline-none text-center shadow-sm cursor-not-allowed w-1/12 py-2 mb-4"
            type="number"
            readOnly
            placeholder="Year"
            value={year}
          />
        </div>
        <div>
          <input
            className="outline-none shadow-md text-center border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mt-6 mb-4"
            type="number"
            placeholder="Transfer Amount $"
            value={money}
            onChange={handlerMoney}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="cursor-alias bg-sky-500 px-3 text-xl shadow-md text-white rounded-md py-1 transition ease-in-out delay-80 hover:bg-sky-400 hover:shadow-xl active:bg-sky-300"
          onClick={transfer}
        >
          Transfer
        </button>
      </div>
      <ToastContainer limit={3} transition={Flip} />
    </div>
  );
}

export default Transaction;

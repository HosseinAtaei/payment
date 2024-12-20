import { Flip, ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Home({ addData }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [total, setTotal] = useState("");

  function handlerName(event) {
    setName(event.target.value);
  }
  function handlerNumber(event) {
    let value = event.target.value;
    if (value.length <= 16) {
      setNumber(value);
    }
  }
  function handlerCvv2(event) {
    const value = event.target.value;
    if (value.length <= 4) {
      setCvv2(event.target.value);
    }
  }
  function handlerYear(event) {
    const value = event.target.value;
    if (value.length <= 2) {
      setYear(value);
    }
  }
  function handlerMonth(event) {
    const value = event.target.value;
    if (value.length <= 2 && value < 13) {
      setMonth(value);
    }
  }
  function handlerTotal(event) {
    const value = event.target.value;
    if (value > 0) {
      setTotal(value);
    }
  }
  function handleAddData() {
    switch (true) {
      case name.length <= 0:
        toast.error("Enter A Valid Name");
        break;
      case number.length < 15:
        toast.error("invalid Card Serial Number");
        break;
      case cvv2.length < 3:
        toast.error("Invalid CVV2");
        break;
      case year.length < 2:
        toast.error("invalid Year");
        break;
      case month.length < 2:
        toast.error("Invalid Month");
        break;
      default:
        toast.success("Successfuly Added! 🎉");
        const newData = { name, number, cvv2, year, month, total };
        addData(newData);
        setName("");
        setNumber("");
        setCvv2("");
        setYear("");
        setMonth("");
        setTotal("");
        break;
    }
  }

  return (
    <div className="pt-5">
      <div className="flex flex-col items-center">
        <div className="flex w-2/3 justify-around gap-5">
          <input
            className="outline-none text-center shadow-md w-1/4 border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handlerName}
          />
          <input
            className="outline-none w-2/4 text-center shadow-md border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="number"
            placeholder="Card Serial Number"
            value={number}
            onChange={handlerNumber}
          />
        </div>
        <div className="flex gap-16 justify-center mt-6 w-2/3">
          <input
            className="outline-none w-1/12 shadow-md text-center border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="number"
            placeholder="CVV2"
            value={cvv2}
            onChange={handlerCvv2}
          />
          <input
            className="outline-none w-1/12 text-center shadow-md border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="number"
            placeholder="Month"
            value={month}
            onChange={handlerMonth}
          />
          <input
            className="outline-none w-1/12 shadow-md text-center border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mb-4"
            type="number"
            placeholder="Year"
            value={year}
            onChange={handlerYear}
          />
        </div>
        <div>
          <input
            className="outline-none shadow-md text-center border-b-2 transition ease-in-out delay-100 focus:border-b-indigo-500 focus:shadow-xl border-zinc-500 py-2 mt-6 mb-4"
            type="number"
            placeholder="Total Money $"
            value={total}
            onChange={handlerTotal}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="cursor-cell bg-sky-500 px-3 text-xl shadow-md text-white rounded-md py-1 transition ease-in-out delay-80 hover:bg-sky-400 hover:shadow-xl active:bg-sky-300"
          onClick={handleAddData}
        >
          ADD
        </button>
      </div>
      <ToastContainer limit={3} transition={Flip} />
    </div>
  );
}

export default Home;

import React from "react";

const bankNames = {
  603799: "Bank Melli Iran",
  589210: "Bank Sepah",
  627353: "Bank Tejarat",
  610433: "Bank Mellat",
  502229: "Parsian Bank",
  627488: "Bank Karafarin",
  621986: "Saman Bank",
  639346: "Pasargad Bank",
  627381: "Ansar Bank",
  639607: "Sarmayeh Bank",
};

function getBankName(cardNumber) {
  const bank = cardNumber.slice(0, 6);
  return bankNames[bank] || "No Bank Name";
}

function Cards({ data = [], selectCard }) {
  const haveCard = (
    <div className="h-50 p-2 flex gap-4">
      {data.map((elem, index) => (
        <div
          className="cursor-pointer shadow-lg rounded-lg bg-gradient-to-br from-indigo-400 to-sky-500 p-5 w-2/6 font-semiboldbold transition ease-in-out delay-150 hover:-translate-y-3 hover:shadow-2xl active:scale-125 duration-300"
          key={index}
          onClick={() => selectCard(elem)}
        >
          <div className="flex justify-between items-center pb-3">
            <p className="text-white font-semibold capitalize">{elem.name}</p>
            <p className="text-yellow-300 font-bold">
              {getBankName(elem.number)}
            </p>
          </div>
          <div className="text-white flex justify-center tracking-wider font-bold text-xl py-4">
            <p className="font-sans">
              {elem.number.match(/.{1,4}/g).join(" - ")}
            </p>
          </div>

          <div className="text-white pt-2 flex justify-between">
            <p>CVV2: {elem.cvv2}</p>
            <p>
              EXP: {elem.month}/{elem.year}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="font-mono font-bold text-2xl pt-2 text-yellow-200">
              ${parseFloat(elem.total).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  const noCard = (
    <div>
      <h1 className="text-rose-500 font-bold text-center text-4xl mb-5">
        You Have To Add At Least One Card!!
      </h1>
    </div>
  );
  return <div>{data.length > 0 ? haveCard : noCard}</div>;
}

export default Cards;

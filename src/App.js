import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cards from "./Components/Cards/Cards.js";
import Home from "./Components/Home/Home.js";
import Transaction from "./Components/Transaction/Transaction.js";
import History from "./Components/History/History";

function App() {
  const [data, setData] = useState([]);
  const [selectCard, setSelectCard] = useState("");
  const [history, setHistory] = useState([]);

  function addData(newData) {
    setData([...data, newData]);
  }

  function handlerSelectCard(card) {
    setSelectCard(card);
  }

  function updateCardAndHistory(card, amount, destinationCard) {
    const updatedData = data.map((item) => {
      if (item.number === card.number) {
        return {
          ...item,
          total: (parseFloat(item.total) - parseFloat(amount)).toFixed(2),
        };
      }
      return item;
    });

    setData(updatedData);

    const newHistory = {
      from: card.number,
      to: destinationCard,
      amount: amount,
      date: new Date().toLocaleString(),
    };
    setHistory([...history, newHistory]);
  }

  return (
    <div className="bg-gradient-to-tr from-indigo-500 to-blue-600 h-screen pt-5 select-none">
      <div className="bg-white w-3/4 m-auto rounded-xl p-10 shadow-md h-[90%]">
        <Cards data={data} selectCard={handlerSelectCard} />
        <div className="flex py-9 justify-evenly">
          <Link
            className="p-3 rounded-md shadow-md active:font-semibold transition ease-in-out delay-150 hover:scale-110 hover:shadow-xl duration-200"
            to="/"
          >
            Card 💳
          </Link>
          <Link
            className="p-3 rounded-md shadow-md active:font-semibold transition ease-in-out delay-150 hover:scale-110 hover:shadow-xl duration-200"
            to="/transaction"
          >
            Transaction 📨
          </Link>
          <Link
            className="p-3 rounded-md shadow-md active:font-semibold transition ease-in-out delay-150 hover:scale-110 hover:shadow-xl duration-200"
            to="/history"
          >
            History⌛
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home addData={addData} />} />
          <Route
            path="/transaction"
            element={
              <Transaction
                data={selectCard}
                updateCardAndHistory={updateCardAndHistory}
              />
            }
          />
          <Route path="/history" element={<History history={history} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

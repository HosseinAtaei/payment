function History({ history }) {
  return (
    <div>
      <div>
        {history.length > 0 ? (
          history.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50 shadow-md w-max gap-4 p-3 m-3 rounded-md"
            >
              <p className="py-1 font-mono">
                <span className="font-bold">From:</span> {item.from}
              </p>
              <p className="py-1 font-mono">
                <span className="font-bold">To:</span> {item.to}
              </p>
              <p className="py-1 font-mono">
                <span className="font-bold">Amount:</span> ${item.amount}
              </p>
              <p className="py-1 font-mono">
                <span className="font-bold">Date:</span>
                {item.date}
              </p>
            </div>
          ))
        ) : (
          <div className="bg-rose-200 w-max p-4 m-auto rounded-md text-center">
            <p>No Data Yet 🧾</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;

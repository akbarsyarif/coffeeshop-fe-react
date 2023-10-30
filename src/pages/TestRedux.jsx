import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";

function TestRedux() {
  const number = useSelector((state) => {
    return state.number;
  });
  const dispatch = useDispatch();

  const [screen, setScreen] = useState(() => {
    if (!number) return "";
    return number;
  });
  const [operator, setOperator] = useState("");
  const [math, setMath] = useState({
    first: number,
    operator: "",
  });
  const operators = [
    { symbol: "+", value: "ADD" },
    { symbol: "-", value: "SUB" },
    { symbol: "*", value: "MUL" },
    { symbol: "/", value: "DIV" },
    { symbol: "=", value: "EQUAL" },
  ];

  const numberHandler = (numValue) => {
    if (numValue === "C") {
      setOperator("");
      setScreen("");
      dispatch({
        type: "SET",
        data: 0,
      });
      return;
    }
    setScreen((screen) => {
      const newScreen = screen + numValue;
      dispatch({
        type: "SET",
        
        data: newScreen,
      });
      return newScreen;
    });
  };
  const operatorHandler = ({ symbol, value }) => {
    if (value === "EQUAL") {
      switch (math.operator) {
        case "ADD":
          setScreen(math.first + parseInt(screen));
          return;
        case "SUB":
          setScreen(math.first - parseInt(screen));
          return;
        case "MUL":
          setScreen(math.first * parseInt(screen));
          return;
        case "DIV":
          setScreen(math.first / parseInt(screen));
          return;
      }
    }

    const number = parseInt(screen || math.first);
    setOperator(screen + " " + symbol);
    setMath((data) => ({
      ...data,
      first: number,
      operator: value,
    }));
    setScreen("");
  };

  return (
    <>
      <Header></Header>
      <main className="h-full rounded-md p-8 flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-bold">Calculator</h1>
        <section className="bg-[#dedede] rounded-md w-3/4 p-5 flex flex-col gap-3">
          <section className="bg-slate-400 h-[120px] border-2 p-3 rounded-t-md">
            <div className="h-full flex flex-col items-end overflow-hidden p-3">
              <p className="text-md font-bold select-none flex-1">{operator}</p>
              <p className="text-5xl font-bold overflow-hidden whitespace-nowrap select-none flex-[3]">{screen}</p>
            </div>
          </section>
          <section className="bg-slate-800 h-[400px] border-2 p-3 rounded-b-md flex gap-4">
            <section className="bg-white flex-1 p-3 grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, ""].map((number, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    numberHandler(number);
                  }}
                  className="border-2 text-xl font-bold flex items-center justify-center rounded-md cursor-pointer select-none active:bg-slate-500"
                >
                  {number}
                </div>
              ))}
            </section>
            <section className="bg-white flex-[.2] p-3 flex flex-col gap-1">
              {operators.map((op, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    operatorHandler(op);
                  }}
                  className="border-2 cursor-pointer select-none active:bg-slate-500 rounded-md flex-1 flex items-center justify-center text-xl font-bold"
                >
                  {op.symbol}
                </div>
              ))}
            </section>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default TestRedux;

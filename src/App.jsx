import React from "react";

const LeaderboardCard = ({ rankData }) => (
  <div className="flex font-Montserrat flex-col p-6 bg-white rounded shadow-sm w-full md:w-auto md:flex-1 border border-[#e27daa]">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <div className="text-3xl font-bold leading-9 text-[#e27daa]">
        Basic Backtest
      </div>
      <div className="md:flex md:items-center md:gap-2 rounded border flex justify-between border-[#e27daa]">
        <div className="md:p-2 p-2 pr-[50px] text-white bg-[#e27daa]">Slippage</div>
        <select className="p-2 bg-white border-none outline-none text-[#e27daa]">
          <option>0%</option>
          <option>0.5%</option>
          <option>1%</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border border-[#e27daa] p-3 text-left">Rank</th>
            <th className="border border-[#e27daa] p-3 text-left">Name</th>
            <th className="border border-[#e27daa] p-3 text-left">
              Calmar Ratio
            </th>
            <th className="border border-[#e27daa] p-3 text-left">
              Overall Profit
            </th>
            <th className="border border-[#e27daa] p-3 text-left">
              Avg Daily Profit
            </th>
            <th className="border border-[#e27daa] p-3 text-left">
              Win % (Day)
            </th>
            <th className="border border-[#e27daa] p-3 text-left">
              Price (RS)
            </th>
            <th className="border border-[#e27daa] p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rankData.rank.map((rank, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border border-[#4a4a4a] p-3 text-black text-center">{rank}</td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa]">
                {rankData.nameData[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa] text-center">
                {rankData.calmarRatio[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa] text-center">
                {rankData.overallProfit[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa] text-center">
                {rankData.avgDailyProfit[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa] text-center">
                {rankData.winPercent[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-[#e27daa] text-center">
                {rankData.price[i]}
              </td>
              <td className="border border-[#4a4a4a] p-3 text-black">
                <a
                  href="#view"
                  className="text-black block mb-2 w-fit mx-auto hover:border-b-2 hover:border-[#e27daa] hover:text-[#e27daa] transition-all duration-150"
                >
                  {rankData.action[i]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const MyComponent = () => {
  const rankData = {
    type: "Basic Backtest",
    rank: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    nameData: [
      "Selling with re-entre",
      "strategy_name",
      "Based on premium and",
      "strategy_name",
      "strategy_name",
      "Based on premium wit",
      "strategy_name",
      "Wait and trade Save",
      "iron condor",
      "strategy_name",
    ],
    calmarRatio: [
      "3.96",
      "3.62",
      "3.42",
      "3.22",
      "3.22",
      "3.01",
      "2.76",
      "2.62",
      "2.44",
      "2.04",
    ],
    overallProfit: [
      "381845",
      "268872.5",
      "255425",
      "370845",
      "370845",
      "135980",
      "267867.5",
      "178252.5",
      "176420",
      "244555",
    ],
    avgDailyProfit: [
      "319.54",
      "216.31",
      "208.51",
      "303.47",
      "303.47",
      "185.77",
      "218.49",
      "161.9",
      "137.51",
      "198.66",
    ],
    winPercent: [
      "0.65",
      "0.64",
      "0.64",
      "0.65",
      "0.65",
      "0.49",
      "0.6",
      "0.63",
      "0.65",
      "0.62",
    ],
    price: ["-", "500", "-", "-", "-", "-", "-", "-", "-", "-"],
    action: [
      "View",
      "Buy",
      "View",
      "View",
      "View",
      "View",
      "View",
      "View",
      "View",
      "View",
    ],
  };

  return (
    <section className="flex flex-col py-6 px-8 bg-white shadow-sm">
      <header className="self-center text-5xl font-bold leading-tight text-[#4a4a4a] font-serif">
        Leaderboard
      </header>
      <section className="flex flex-col gap-6 mt-10">
        <LeaderboardCard rankData={rankData} />
      </section>
    </section>
  );
};

export default MyComponent;

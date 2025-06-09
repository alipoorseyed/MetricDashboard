import Charts from "./Charts";
import SimulationCard from "./simulationCard";
import axios from "axios";

export const dynamic = "force-dynamic";

interface PropsType {
  month: string;
}

const orderedKeys = [
  { title: "Number Of Visits", key: "Visits" },
  { title: "Revenue", key: "Revenue" },
  { title: "New Users", key: "Users" },
  { title: "Number Of Transactions", key: "Transactions" },
];

const getMonthlyData = async (month: string) => {
  const response = await axios.get(`http://localhost:3001/${month}`);
  console.log(response.data);
  
  return response.data; 
};

export default async function Simulation({ month }: PropsType) {
    
  const data = await getMonthlyData(month);

  return (
    <>
    <div className="w-full flex justify-center items-center flex-wrap max-2xl:gap-6 max-xl:gap-7 max-2xld:gap-4 mt-14">
      {orderedKeys.map((item, index) => (
        <SimulationCard
          key={index}
          title={item.title}
          count={data[item.key]}
        />
      ))}
    </div>
    <Charts data={data} />
    </>
  );
}

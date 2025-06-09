import Input from "@/common/searchInput";
import { Suspense } from "react";
import Simulation from "./simulation";




interface propstype {
  searchParams: Promise<{ month?: string }>;
}


export default async function Dashboard(props : propstype) {
  const month = (await props.searchParams).month || "jan";

  

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-3xl font-bold text-green-50 mb-4">Metric Dashboard</h1>
      <Input classNameInput="p-2 pl-10" className="max-2xl:w-3/5" />
      <Suspense fallback={<p>Loading ....</p>}>
        <Simulation month={month} />
      </Suspense>
    </div>
  );
}

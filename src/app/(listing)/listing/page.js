import React, { Suspense } from "react";
import ListingCard from "../../../components/cards/ListingCard";
import { getAllListing } from "../../../Actions/ssrActions.js/projectSSRAction";

async function getData() {
  const res = await getAllListing();
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return await res.data.result;
}

export default async function ListingPage() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Suspense fallback={<h1>Loading.........</h1>}></Suspense>
      {data.map(() => {
        return <ListingCard />;
      })}
    </div>
  );
}

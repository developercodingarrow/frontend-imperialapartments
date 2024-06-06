import React from "react";
import ListingCard from "../../../components/cards/ListingCard";

export default function ListingPage() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return <ListingCard />;
      })}
    </div>
  );
}

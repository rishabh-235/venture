import React, { useEffect, useState } from "react";
import axios from "axios";
import InvestorCard from "./InvestorCard";
import { useSelector } from "react-redux";

export default function TopInvestors() {
  const [cards, setCards] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/investor/topinvestors")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const filteredCards = cards.filter((card) => card.user._id !== userData?._id);

  return (
    <div>
      <div className="text-[1.6rem] font-[500] tracking-wide text-start w-[78rem] mb-10">
        Top Investor
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredCards.map((card, index) => (
          <div key={index} className="">
            <InvestorCard data={card} />
          </div>
        ))}
      </div>
      <button className="w-[8rem] h-[3rem] bg-light-blue-700 hover:bg-light-blue-600 rounded-md mt-12">
        Load More
      </button>
    </div>
  );
}

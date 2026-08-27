import React, { useEffect, useMemo } from "react";
import InvestorCard from "./InvestorCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopInvestors } from "../../redux/slice/investorSlice";

export default function TopInvestors() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const cards = useSelector((state) => state.investor.topInvestors);

  useEffect(() => {
    dispatch(fetchTopInvestors());
  }, [dispatch]);

  const filteredCards = useMemo(
    () => cards.filter((card) => card.user?._id !== userData?._id),
    [cards, userData?._id],
  );

  return (
    <div>
      <div className="text-[1.6rem] font-[500] tracking-wide text-start w-[78rem] mb-10">
        Top Investor
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredCards.map((card, index) => (
          <div key={index}>
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

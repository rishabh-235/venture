import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

function Perks() {
  const [table, setTable] = useState(false);
  const [tableItems, setTableItems] = useState([]);
  const [perksData, setPerksData] = useState({});
  const dispatch = useDispatch();
  const [localTextData, setLocalTextData] = useState(perksData.textData);

  const addItem = () => {
    setTable(true);
    const newItem = {
      id: Date.now(),
      investOver: "",
      toReceive: "",
      placeholder: `${(tableItems.length + 1) * 250}`,
    };
    setTableItems([...tableItems, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = tableItems.filter((item) => item.id !== id);
    setTableItems(updatedItems);

    if (updatedItems.length === 0) setTable(false);

    setPerksData((prevState) => {
      const updatedTextData = { ...prevState.textData };
      delete updatedTextData[id];

      return {
        ...prevState,
        textData: updatedTextData,
      };
    });
  };

  
useEffect(() => {
  setLocalTextData(perksData.textData);
}, [perksData.textData]); // Sync state with perksData

useEffect(() => {
  dispatch(
    updatePitchData({
      pitchName: "perks",
      data: {
        textData: localTextData, // Uses the local copy
      },
    })
  );
}, [localTextData, dispatch]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;

    setPerksData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        [id]: {
          ...prevState.textData?.[id],
          [name]: value,
        },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "perks",
        data: {
          textData: {
            ...perksData.textData,
            [id]: {
              ...perksData.textData?.[id],
              [name]: value,
            },
          },
        },
      })
    );

  };

  return (
    <div className=" flex flex-col items-start">
      <div className=" text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Perks</p>
        <p className=" w-[80%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1 mb-3">
          Offering investment perks can help you raise money faster. Check out
          some
          <a
            className=" text-light-blue-700 hover:text-blue-gray-600"
            href="https://guides.wefunder.com/pre-launch/how-to-curate-your-highlights"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            cool perks companies have offered.
          </a>
        </p>
      </div>
      {table && (
        <table className=" ml-[2.5rem] mb-2">
          <thead>
            <tr className="text-gray-900 text-[0.97rem] text-left tracking-tight">
              <th className=" px-1 ">Invest over</th>
              <th className=" px-1 ">To receive</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tableItems.map((item) => (
              <tr key={item.id}>
                <td className=" p-1">
                  <div className="w-[7.8rem] relative">
                    <input
                      id={`investOver-${item.id}`}
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1.7rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[7.8rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px]"
                      type="number"
                      name="investOver"
                      placeholder={item.placeholder}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                    <label
                      htmlFor={`investOver-${item.id}`}
                      className="peer-focus:text-blue-gray-900 flex absolute top-[1.1rem] text-blue-gray-200 font-[600] text-[1.02rem] ml-[0.98rem]"
                    >
                      ₹
                    </label>
                  </div>
                </td>
                <td className=" p-1">
                  <div className="w-[31rem] relative">
                    <input
                      id={`toReceive-${item.id}`}
                      className=" peer focus:placeholder:text-transparent focus:ring-black focus:border-none pl-[1rem] flex justify-center items-center text-[1.02rem] tracking-wider pt-2 font-[600] text-gray-900 placeholder:text-blue-gray-200 w-[31rem] h-[3.7rem] rounded-[0.4rem] border-gray-300 border-[1px]"
                      type="text"
                      name="toReceive"
                      placeholder=""
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </div>
                </td>
                <td className=" p-1">
                  <button onClick={() => removeItem(item.id)}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="22px"
                        viewBox="0 -960 960 960"
                        width="22px"
                        fill="#B7B7B7"
                      >
                        <path d="M251.33-178 178-251.33 406.67-480 178-708.67 251.33-782 480-553.33 708.67-782 782-708.67 553.33-480 782-251.33 708.67-178 480-406.67 251.33-178Z" />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={addItem}
        className="mb-[10rem] ml-[2.8rem] text-[0.95rem] text-blue-gray-500 font-[700] border border-gray-600 py-[0.65rem] px-[0.9rem] rounded-[0.2rem]"
      >
        + Add a perk
      </button>
    </div>
  );
}

export default Perks;

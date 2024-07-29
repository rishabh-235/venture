import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function InvestorCard(props) {
  const { data } = props;
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [text, setText] = useState("Follow");

  useEffect(() => {
    if (userData && userData.following.includes(data.user._id)) {
      setIsFollowing(true);
      setText("Following");
    }
  }, [userData, data.user._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData) {
      navigate("/login");
      return;
    }

    const formData = {
      user_id: data.user._id,
      accessToken: userData.accessToken,
    };

    try {
      const endpoint = isFollowing ? "unfollow" : "follow";
      const response = await axios.post(`http://localhost:8000/api/v1/user/${endpoint}`, formData, { withCredentials: true });

      if (response.data) {
        setIsFollowing(!isFollowing);
        setText(isFollowing ? "Follow" : "Following");
      }
    } catch (error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="w-[24rem] h-[29rem] border-[1px] border-gray-100 rounded-lg p-4 mb-5 hover:shadow-md hover:border-gray-200">
      <div className="flex flex-col items-center justify-start mb-10">
        <Avatar
          src={data.user.avatar || "https://assets.entrepreneur.com/content/3x2/2000/1673527877-anupammittal.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"}
          alt="avatar"
          className="w-[6rem] h-[6rem] border-[1px] border-gray-300 rounded-[6rem]"
        />
        <h2 className="mt-4 text-[1.15rem] text-gray-800 font-[600]">
          {data.user.fullname}
        </h2>
        <p className="text-left mt-4 text-[0.9rem] font-[500]">
          Anupam Mittal is an Indian entrepreneur and angel investor. He is the
          founder and CEO of People Group and Shaadi.com.
        </p>
        <p className="text-left mt-2 text-[0.9rem] w-full font-[500]">
          Infused capital in to over 250 companies.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className={`w-full h-[2.8rem] text-white rounded-md mt-16 ${isFollowing ? 'bg-light-blue-600' : 'bg-black'}`}
      >
        {text}
      </button>

      <div className="text-[0.92rem] text-gray-500 mt-2">
        <span className="text-black font-[500]">{1600} followers</span>{" "}
        coinvesting <span className="text-black font-[500]">${1.37}Cr</span>
        /deal
      </div>
    </div>
  );
}

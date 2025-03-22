import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function FollowerCard(props) {
    const follower = props.data;
    const userData = useSelector((state) => state.auth.userData);
    const [isFollowing, setIsFollowing] = useState(false);
    const [text, setText] = useState("Follow");
  


    useEffect(() => {
        if (userData && userData.following.includes(follower._id)) {
          setIsFollowing(true);
          setText("Following");
        }
      }, [userData, follower._id]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
          user_id: follower._id,
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
    <div
      key={follower._id}
      className="w-[63rem] flex justify-between items-center min-h-[4.5rem]"
    >
      <div className=" flex">
        <div>
          <img
            src={
              follower.avatar ||
              "https://img.icons8.com/cotton/100/gender-neutral-user--v3.png"
            }
            className="w-[4.5rem] h-[4.5rem] rounded-[5rem] border mr-5"
            alt="logo"
          />
        </div>
        <div className=" w-[27rem] flex flex-col justify-center ">
          <h3 className=" w-full text-start tracking-wider font-[600] py-[0.1rem] px-[0.1rem]">
            {follower.firstname} {follower.middlename} {follower.lastname}
          </h3>
          <h3 className="w-[24rem] text-start text-[0.9rem] font-[500] py-[0.1rem] px-[0.2rem] mt-[0.4rem] tracking-wider leading-[1.2rem]">
            CEO/founder of SmartGurlz . Featured on ABC's Shark Tank and named
            AdWeek's 2017 Disruptor in Gender Diversity.
          </h3>
        </div>
      </div>
      <div className=" px-[1rem]">
        <button
          onClick={handleSubmit}
          className={`w-full h-full top-0 px-[4.5rem] py-[0.6rem] text-[0.9rem] tracking-wide font-[500] rounded-[0.16rem] border border-black ${isFollowing ? 'text-gray-800' : 'bg-black text-white'}`}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

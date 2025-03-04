import React from "react";
import WatchButton from "../WatchButton/WatchButton";

const FeedBack = ({ feedBackData }) => {
  const { name, image, review } = feedBackData;
  //   console.log(feedBackData);
  return (
    <div className="grid grid-cols-2 mx-5 mx-auto">
      {feedBackData.map((feed) => (
        <div className="card card-side w-[80%] bg-base-100 shadow-sm border-2 gap-3 mt-3">
          <figure>
            <img
              className="w-full rounded-lg ml-3"
              src={feed.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body ">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{feed.name}</h2>
              <div className="flex flex-col border-l-2">
                <p className="ml-5 items-center">
                  Date: {new Date().toLocaleDateString()}{" "}
                </p>
                <p className="ml-5 items-center">
                  Date: {new Date().toLocaleTimeString()}{" "}
                </p>
              </div>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end ">
              {/* <button className="btn btn-primary">Watch</button> */}
              <div className="rating gap-1 pr-5 mt-3">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-yellow-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-lime-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-green-400"
                  aria-label="5 star"
                />
              </div>
              <WatchButton></WatchButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;

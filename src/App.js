import React, { useEffect, useState } from "react";
import stylesheet from "./app.module.css";
import Card from "./components/Card";
import { CollegeInformation } from "./json";
const App = () => {
  const [ collegeList, setCollegeList ] = useState(CollegeInformation.slice(0,10));
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );
  const [isLoadMore, setIsLoadMore] = useState(false);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      let prevState=[...collegeList];
      console.log(collegeList.length,CollegeInformation.length)
      let data=prevState.concat(CollegeInformation.slice(collegeList.length,collegeList.length+10));
      setCollegeList(data);
      setIsLoadMore(false);
    },500);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
      setIsLoadMore(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    
    if (!isLoadMore) return;
    else if(collegeList.length!==CollegeInformation.length)
    {
    fetchMoreListItems();
    }
    else{
      setIsLoadMore(false)
    }
  }, [isLoadMore]);

 
  return (
    <div className={stylesheet.container}>
      <h3>College in North India</h3>
      <div className={stylesheet.grid_container}>
        {collegeList.map((res,key) => (
          <Card data={res} key={key}/>
        ))}
        </div>
      {isLoadMore && <div className={stylesheet.load_more}>Loading...</div>}
    </div>
  );
};

export default App;

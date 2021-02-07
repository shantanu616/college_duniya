import React from "react";
import stylesheet from "./card.module.css";
const Card = (props) => {
  const { data } = props;
  const {
    image,
    college_name,
    nearest_place,
    offertext,
    discounted_fees,
    famous_nearest_places,
    original_fees,
    promoted,
    ranking,
    fees_cycle,
    amenties,
    tags,
  } = data;
  return (
    <div className={stylesheet.card}>
      <div className={stylesheet.bg_img}>
        <img src={`/${image}`} style={{ width: "100%" }} />
        <div className={stylesheet.text_block}>
            {promoted?<div className={stylesheet.is_promoted}><img src="/promoted.webp" style={{width:"60px",height:"50px"}}/></div>:null}
            <div className={stylesheet.bottom_div}>
            <div className={stylesheet.floating_tag}>
                <div className={stylesheet.tags}>
                    <span>{tags[0]}</span>
                    <span>{tags[1]}</span>
                </div>
                <h4 className={stylesheet.ranking}># {ranking}</h4>
            </div>
            </div>
        </div>
      </div>

      <div className={stylesheet.content}>
        <div>
          <div className={stylesheet.title}>{college_name}</div>
          <p>
            {nearest_place[0]} <span>| {nearest_place[1]}</span>
          </p>
          <div className={stylesheet.match}>
            93% Match : <span>{famous_nearest_places}</span>
          </div>
        </div>
        <div style={{textAlign:"right"}}>
            <div>{original_fees}</div>
            <div className={stylesheet.price}>&#x20B9; {discounted_fees}</div>
            <div className={stylesheet.fees_cycle}>{fees_cycle}</div>
        </div>
      </div>
      <div className={stylesheet.card_bottom}>
          <div className={stylesheet.offertext}>{offertext}</div>
          <div className={stylesheet.amenties}>{amenties[0]} + {amenties[1]}</div>
          </div>
    </div>
  );
};

export default Card;

import React from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends React.Component {
  render() {
    return (
      <div className="flex-col">
        {/* <h2>Youtube Video</h2>
        <hr />
        <YoutubeComp
          title="Utuh Hamuk"
          desc="Utuh lagi mahamuk"
          img="thumb-1.jpg"
        />
        <YoutubeComp time="3.12" title="Utuh Tegang" desc="Utuh lagi tegang" />
        <YoutubeComp
          time="11.11"
          title="Utuh Liar"
          desc="Utuh lagi liar liar nya"
        />
        <YoutubeComp time="12.12" title="Utuh Liut" desc="Utuh lagi lamas" />

        <hr /> */}

        <Product />
      </div>
    );
  }
}

export default Home;

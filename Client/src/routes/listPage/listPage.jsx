import React from "react";
import { listData } from "../../lib/dummyData";
import Map from "../../components/map/map";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
export default function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />

          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
}

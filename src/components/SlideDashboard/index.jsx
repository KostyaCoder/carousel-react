import React from "react";
import Slide from "../Slide";
import dataSrcJson from "../../dataImg.json";

export default class SlideDashboard extends React.Component {
  render() {
    const { src, title, text, link } = dataSrcJson[0];
    return <Slide src={src} title={title} text={text} link={link} />;
  }
}

import React from "react";
import Slide from "../Slide";
import dataSrcJson from "../../dataImg.json";

export default class SlideDashboard extends React.Component {
  render() {
    // const dataSrc = JSON.parse(dataSrcJson);

    const dataSrc = [
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-v838-monocerotis.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-arp-273.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-carina-nebula.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn2400",
      "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-jupiter.jpg?t=tn2400",
    ];

    return <Slide src={dataSrc[0]} />;
  }
}

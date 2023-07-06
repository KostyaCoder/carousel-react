import React from "react";
import Slide from "../Slide";
import dataSrcJson from "../../dataImg.json";

export default class SlideDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      intervalId: null,
      textButton: "Enable autoslide",
      speedSlide: 3,
    };
  }

  componentWillUnmount() {
    this.stopAutoSlides();
  }

  componentDidUpdate(prevProps, prevState) {
    const { speedSlide } = this.state;

    if (prevState.speedSlide !== speedSlide) {
      this.stopAutoSlides();
      this.startAutoSlides();
    }
  }

  startAutoSlides = () => {
    const { speedSlide } = this.state;
    const intervalId = setInterval(this.nextSlide, speedSlide*1000);

    this.setState({
      intervalId: intervalId,
      textButton: "Disable autoslide",
    });
  };

  stopAutoSlides = () => {
    this.setState((state) => {
      const { intervalId } = state;
      clearInterval(intervalId);

      return { intervalId: null, textButton: "Enable autoslide" };
    });
  };

  onClickStartStopAutoSlide = () => {
    const { intervalId } = this.state;
    if (intervalId) {
      this.stopAutoSlides();
    } else {
      this.startAutoSlides();
    }
  };

  nextSlide = () => {
    this.setState((curState) => {
      const { currentSlide } = curState;
      return {
        currentSlide:
          currentSlide + 1 === dataSrcJson.length ? 0 : currentSlide + 1,
      };
    });
  };

  prevSlide = () => {
    this.setState((curState) => {
      const { currentSlide } = curState;
      return {
        currentSlide:
          currentSlide - 1 < 0 ? dataSrcJson.length - 1 : currentSlide - 1,
      };
    });
  };

  handleChange = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { currentSlide, textButton, speedSlide } = this.state;
    return (
      <>
        <button onClick={this.onClickStartStopAutoSlide}>{textButton}</button>

        <select
          name="speedSlide"
          value={speedSlide}
          onChange={this.handleChange}
        >
          <option value={1}>1 sec</option>
          <option value={3}>3 sec</option>
          <option value={5}>5 sec</option>
          <option value={10}>10 sec</option>
        </select>

        <Slide
          curSlide={currentSlide}
          handleClickNextSlide={this.nextSlide}
          handleClickPrevSlide={this.prevSlide}
        />
      </>
    );
  }
}

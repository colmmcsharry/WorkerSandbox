import React from "react";
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Lightbox from "../../Lightbox.js";
import Bio from "./Bio";
import workers from "./workers";

class Builders extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onInitialized(e) {
    ReactDOM.render(
      <Bio
        bio={{
          firstName: "Mark",
          lastName: "Doe",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "Mark@gmail.com",
          bio: "Hey I'm Mark and welcome to my bio"
        }}
      />,
      document.getElementById("myelement")
    );
    ReactDOM.render(
      <Lightbox iswho="Mark" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)} />;

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    if (e.item === 2) {
      console.log("now its Mark");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Mark",
            lastName: "Doe",
            rating: "\u2B50 \u2B50",
            phone: "605 784 8001",
            email: "Mark@gmail.com",
            bio: "Hey I'm Mark and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Mark" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 0) {
      console.log("now its Bob");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Bob",
            lastName: "Smith",
            rating: "\u2B50 \u2B50 \u2B50 \u2B50",
            phone: "086 779 0230",
            email: "bob@gmail.com",
            bio: "Hey I'm Bob and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Bob" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      console.log("now its Al");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Alan",
            lastName: "Johnson",
            rating: "\u2B50 ",
            phone: "778 768 9982",
            email: "al@gmail.com",
            bio: "Hey I'm Al and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Alan" />,
        document.getElementById("mybotelement")
      );
    }
  }

  galleryItems() {
    return this.items.map(i => <h2 key={i}> {i}</h2>);
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={false}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          items={this.state.galleryItems}
          ref={el => (this.Carousel = el)}
          onSlideChange={this.onSlideChange}
          onInitialized={this.onInitialized}
        >
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src="https://rapidstartcrm.com/wp-content/uploads/Home-Builder-9.jpg"
              />
              <figcaption> Mark </figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src="https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <figcaption> Bob</figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src="https://www.myjobquote.co.uk/assets/img/builders-1.jpg"
              />
              <figcaption> Alan</figcaption>
            </figure>
          </div>
        </AliceCarousel>

        <div id="myelement" />
        <div id="mybotelement" />
      </div>
    );
  }
}

export default Builders;

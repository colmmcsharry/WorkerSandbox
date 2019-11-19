import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
/*remember there is an AliceCarousel.CSS file that can be edited too, like in my group proj version, can remove buttons, etc.*/

class CGallery extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={3}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="Mypicsclass">
          <figure>
            {" "}
            <img
              className="carimages"
              src="https://cdn-images-1.medium.com/max/1600/0*I0vqL4kZwVo_knXG.png"
            />
            <figcaption>Designer</figcaption>
          </figure>
        </div>
        <div className="Mypicsclass">
          <figure>
            <img
              className="carimages"
              src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"
            />
            <figcaption>
              <Link to="/builders"> Builders</Link>
            </figcaption>
          </figure>
        </div>
        <div className="Mypicsclass">
          <figure>
            <img
              className="carimages"
              src="https://images.all-free-download.com/images/graphicthumb/cartoon_cook_cute_design_vector_541584.jpg"
            />
            <figcaption>Chef</figcaption>
          </figure>
        </div>
        <div className="Mypicsclass">
          <figure>
            <img
              className="carimages"
              src="https://applebymall.co.uk/wp-content/uploads/2016/06/questions-for-accountants.jpg"
            />
            <figcaption>Accountant</figcaption>
          </figure>
        </div>
        <div className="Mypicsclass">
          <figure>
            <img
              className="carimages"
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24958929.jpg"
            />
            <figcaption>Clown</figcaption>
          </figure>
        </div>
      </AliceCarousel>
    );
  }
}

export default CGallery;

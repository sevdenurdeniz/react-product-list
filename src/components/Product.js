import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Product({ images, title, description, brand, price, stock, rating }) {
  const getBackgroundColor = (brand) => {
    switch (brand) {
      case "Apple":
        return "#67c3ee";
      case "Samsung":
        return "#ddce61";
      case "Huawei":
        return "rgb(86 233 86)";
      case "OPPO":
        return "#ee678c";
      case "Microsoft Surface":
        return "#f58b49";
      case "HP Pavilion":
        return "rgb(165 61 226)";
      case "Royal_Mirage":
        return "rgb(54 137 218)";

      default:
        return "black";
    }
  };
  const getLimitStyles = (stock) => {
    if (stock < 50) {
      return {
        color: "red",
        fontWeight: "bold",
      };
    } else {
      return {
        color: "inherit",
        fontWeight: "normal",
      };
    }
  };
  const getStarColor = (index) => {
    const roundedRating = Math.round(rating);
    return index < roundedRating ? "#ffc939" : "gray";
  };

  const brandName = Array.isArray(brand) ? brand[0] : brand;
  return (
    <div className="col-12 col-lg-4 my-5">
      <div className="row m-0">
        <div className="card">
          <div className="col-12">
            <Carousel className="p-3">
              {images &&
                images.map(
                  (
                    image,
                    index //undefined hatası çözümü
                  ) => (
                    <Carousel.Item key={index}>
                      <img src={image} alt={`Image${index + 1}`} />
                    </Carousel.Item>
                  )
                )}
            </Carousel>
          </div>
          <div className="col-12 text-center">
            <h4> {title}</h4>
          </div>

          <div className="col-12 rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} style={{ color: getStarColor(index) }}>
                ★
              </span>
            ))}
          </div>
          <div className="col-12 text mt-2">
            <p>{description}</p>
          </div>
          <div className="row">
            <div className="col-6 ctg">
              <span
                style={{
                  backgroundColor: getBackgroundColor(brandName),
                  borderColor: getBackgroundColor(brandName),
                }}
              >
                {brandName}
              </span>
            </div>
            <div className="col-6">
              <div className="fiyat">
                <span>{Number(price).toLocaleString()}$</span>
              </div>
              <div className="stok text-right">
                <span style={getLimitStyles(stock)}>Limited Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

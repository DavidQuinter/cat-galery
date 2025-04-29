import "./figure.css";

export const Figure = ({ url, alt }) => {
  return (
    <figure className="figure">
      <img src={url} alt={alt} onload="this.classList.add('loaded')"/>
    </figure>
  );
};

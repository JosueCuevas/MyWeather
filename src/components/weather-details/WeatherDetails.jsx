// eslint-disable-next-line react/prop-types
const WeatherDetails = ({ cloudy, humidity, wind, visibility }) => {
  return (
    <>
      <h3>Weather Details</h3>
      <article>
        <span>Cloudy</span>
        <span>{cloudy}%</span>
      </article>
      <article>
        <span>Humidity</span>
        <span>{humidity}%</span>
      </article>
      <article>
        <span>Wind</span>
        <span>{wind}m/s</span>
      </article>
      <article>
        <span>Visibility</span>
        <span>{visibility}m</span>
      </article>
    </>
  );
};

export default WeatherDetails;

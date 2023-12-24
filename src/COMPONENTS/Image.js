export function Image({ image, height, width, radius, alt, classes }) {
  return (
    <img
      src={image}
      className={classes}
      height={height !== undefined ? height : "100%"}
      width={width !== undefined ? width : "100%"}
      style={{
        borderRadius: radius !== undefined ? `${radius}px` : `6px`,
      }}
      alt={alt !== undefined ? alt : "Image Description Here"} // Add alt attribute for accessibility
    />
  );
}

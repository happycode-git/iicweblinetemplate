import { useEffect, useState } from "react";
import { storage_DownloadImage } from "../Global";

export function AsyncImage({ path, height, width, radius, alt, classes }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    storage_DownloadImage(path, setImageUrl);
  }, [path]);

  return (
    <div
      className={classes}
      style={{
        height: height !== undefined ? height : "100%",
        width: width !== undefined ? width : "100%",
        borderRadius: radius !== undefined ? `${radius}px` : "6px",
        overflow: "hidden",
        backgroundColor: imageUrl ? "transparent" : "#CCD3E2", // Gray background if no image
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={alt !== undefined ? alt : "Image Description Here"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
}

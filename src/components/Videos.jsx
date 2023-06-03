import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";
import { Height, WidthFull } from "@mui/icons-material";

const Videos = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "white", fontFamily: "Roboto" }}>Loading...</h1>
      </div>
    );
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default Videos;

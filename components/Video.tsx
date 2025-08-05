export function Video() {
  return (
    <div>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

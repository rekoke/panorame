interface IframeProps {
  src: string;
}
const MyIframe = ({ src }: IframeProps) => {
  console.log("src--", src);
  return (
    <iframe
      width="853"
      height="480"
      src={src}
      allowFullScreen
      allow="xr-spatial-tracking"
    ></iframe>
  );
};
export default MyIframe;

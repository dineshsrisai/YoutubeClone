const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, publishedAt, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-4 m-4 w-full max-w-sm rounded-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;

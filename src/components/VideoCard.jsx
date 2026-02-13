const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, publishedAt, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="pl-20 m-4 w-96 cursor-pointer border rounded-lg border-gray-950 hover:border-gray-600">
      <img
        className="rounded-lg pr-20"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-semibold">{title}</li>
        <li className="opacity-45 py-2">{channelTitle}</li>
        <li className="opacity-45">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

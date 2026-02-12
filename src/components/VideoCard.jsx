const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, publishedAt, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="pl-20 m-4 w-96 cursor-pointer border rounded-lg border-gray-950 hover:border-gray-600">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li className="font-bold py-2">{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  let { viewCount } = statistics;

  if (viewCount >= 1000000) {
    viewCount = (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    viewCount = (viewCount / 1000).toFixed(1) + "K";
  }

  return (
    <div className="w-full cursor-pointer">
      <div className="relative w-full">
        <img
          className="rounded-xl w-full aspect-video object-cover"
          alt="thumbnail"
          src={thumbnails.standard.url}
        />
      </div>
      <div className="flex gap-3 pt-3">
        <div className="shrink-0">
          <div className="w-9 h-9 rounded-full bg-gray-600"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-5 line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{channelTitle}</p>
          <p className="text-xs text-gray-400">{viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

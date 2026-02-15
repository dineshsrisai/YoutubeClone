import Button from "./Button";

const list = [
  "All",
  "Live",
  "Cricket",
  "Cinema",
  "Web Development",
  "Gaming",
  "News",
  "Cooking",
  "Podcasts",
  "Mixes",
  "Recently uploaded",
  "New to you",
  "DSA",
  "React",
  "C++",
  "Thrillers",
  "Watched",
  "AI",
  "Music",
];

const ButtonsList = () => {
  return (
    <div className="flex text-white overflow-x-auto scrollbar-hide py-2 px-2 sticky top-\[60px]\ bg-black z-40 border-gray-800">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonsList;

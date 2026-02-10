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
];

const ButtonsList = () => {
  return (
    <div className="flex text-white cursor-pointer">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonsList;

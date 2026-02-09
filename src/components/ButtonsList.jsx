import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex text-white cursor-pointer">
      <Button name="All" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cinema" />
      <Button name="Web Development" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Podcasts" />
      <Button name="Mixes" />
      <Button name="Recently uploaded" />

      <Button name="New to you" />
    </div>
  );
};

export default ButtonsList;

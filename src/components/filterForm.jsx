import { FunnelPlus } from "lucide-react";
import { Button } from "./ui/button/button";

export const FilterForm = () => {
  const handleSelect = () => {
    console.log("select");
  };
  return (
    <div className="">
      <Button onClick={handleSelect}>
        Show breeds <FunnelPlus size={20} />
      </Button>
    </div>
  );
};

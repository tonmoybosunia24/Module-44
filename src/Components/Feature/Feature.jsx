import { CiCircleCheck } from "react-icons/ci";
const Feature = ({feature}) => {
       return (
              <div>
                     <p className="flex items-center gap-[3px]"><CiCircleCheck />
                     {feature}</p>
              </div>
       );
};

export default Feature;
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

       const PriceOptions = [
              {
                     "id": 1,
                     "name": "Basic Plan",
                     "price": 29.99,
                     "features": [
                            "Access to gym floor",
                            "Locker room access",
                            "Free weight area",
                            "Cardio equipment",
                            "Open 24/7",
                            "Access to mobile app workout tracking",
                            "1 free fitness assessment per year",
                            "Water fountain access"
                     ]
              },
              {
                     "id": 2,
                     "name": "Standard Plan",
                     "price": 49.99,
                     "features": [
                            "All features of Basic Plan",
                            "Access to group fitness classes",
                            "Free guest pass (1 per month)",
                            "Discount on personal training",
                            "Sauna and steam room access",
                            "Access to swimming pool",
                            "Access to beginner yoga classes",
                            "1 hour of free parking"
                     ]
              },
              {
                     "id": 3,
                     "name": "Premium Plan",
                     "price": 69.99,
                     "features": [
                            "All features of Standard Plan",
                            "Unlimited guest passes",
                            "Free fitness consultation",
                            "Priority class booking",
                            "Access to exclusive equipment",
                            "Private locker room",
                            "Towel service",
                            "Extended swimming pool hours",
                            "Access to advanced yoga and pilates classes",
                            "Free nutritional supplement samples"
                     ]
              },
       ]


       return (
              <div>
                     <h2 className="text-2xl">Best Prices In The Town</h2>
                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                     {
                            PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                     }
                     </div>
              </div>
       );
};

export default PriceOptions;
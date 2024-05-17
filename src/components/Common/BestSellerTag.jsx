import { BestSeller } from "@/utils/BestSeller";

export const BestSellerTag = ({ subCategory }) => {
  const isBestSeller = subCategory.some((item) => BestSeller[item._id]);

  if (!isBestSeller) {
    return null;
  }

  return (
    <div className="best-seller">
      <span>Best Seller</span>
    </div>
  );
};

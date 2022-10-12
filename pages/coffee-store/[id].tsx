import { useRouter } from "next/router";

const CofeeStore = () => {
  const router = useRouter();
  return <div>Cofee Store Page ( {router.query.id} )</div>;
};

export default CofeeStore;

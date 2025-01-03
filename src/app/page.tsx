import { Button } from "@/components/ui/button";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      Click
      <Link href="/documents/123">
        <span className="text-blue-500 underline">here</span>
      </Link>
      to go to the Docs Page
    </div>
  );
};
export default Home;

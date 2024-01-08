import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  // bring user to onboarding if they havent onboarded yet
  if (!userInfo?.onboarded) redirect("/onboarding");


  return (
    <section>
      <h1 className="head-text mb-10">Communities</h1>

    </section>
  );
};

export default Page;

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type Props = {};

const DashbaordPage = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  return <div>{user.id}</div>;
};

export default DashbaordPage;

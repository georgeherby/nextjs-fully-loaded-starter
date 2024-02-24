import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const UserPage = async () => {
  const session = await getServerSession(authOptions)


  return <div>
    <h1>Hello {session?.user?.name}</h1>
  </div>
}

export default UserPage

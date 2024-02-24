import ThemeToggle from "@/components/global/theme-toggle";
import LogInOutButton from "@/components/global/log-in-out-button";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const AppBar = async () => {
  const session = await getServerSession(authOptions)


  return (
    <div className={'flex w-full justify-between border-b-2'}>
      <h2>App Name</h2><ThemeToggle/> <LogInOutButton isLoggedIn={session !== null}  />
    </div>
)
}


export default AppBar

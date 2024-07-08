import ThemeToggle from "@/components/global/theme-toggle";
import LogInOutButton from "@/components/global/log-in-out-button";
import {getServerSession} from "next-auth";
import authOptions from "@/utils/auth-options";

const AppBar = async () => {
  const session = await getServerSession(authOptions)


  return (
    <div className={'flex w-full justify-between border-b-2 items-center pl-3'}>
      <ThemeToggle/><h2>App Name</h2><LogInOutButton isLoggedIn={session !== null}  />
    </div>
)
}


export default AppBar

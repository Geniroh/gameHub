import { RxAvatar } from 'react-icons/rx';
import { AiOutlineMail, AiFillSetting } from 'react-icons/ai';

const AuthMenuTop = () => {
  return (
    <div className="flex gap-3 text-2xl">
        <div className="rounded-full ">
            <RxAvatar/>
        </div>
        <div className="rounded-full">
            <AiOutlineMail />
        </div>
        <div className="rounded-full">
            <AiFillSetting />
        </div>
    </div>
  )
}

export default AuthMenuTop
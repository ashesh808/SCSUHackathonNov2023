import { twMerge } from "tailwind-merge"

const Box = ({ children, className }) => {
  return (
    <div className={
        twMerge(
            `bg-white h-full w-full`, 
            className
        )}>
            {children}
    </div>
  )
}

export default Box
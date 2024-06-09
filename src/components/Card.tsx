import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="p-[100px] m-[10px] border border-gray-600 flex justify-center items-center shadow-md">
    {children}
  </div>
}

export default Card;

import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md h-auto w-auto">
      {children}
    </div>
  )
}

export default Card

/* 11_07_24    components/contacts/contactBox.tsx */
import { FC } from 'react';

interface contactBoxProps extends React.PropsWithChildren {}

const contactBox: FC<contactBoxProps> = ({ children }) => {
  return (
    <div className='min-h-32   bg-gray-100 hover:bg-primary  py-6 px-10 transition duration-500 ease-in text-black hover:text-white'>
      {children}
    </div>
  );
};

export default contactBox;

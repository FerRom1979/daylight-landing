import clsx from 'clsx';

const Container = ({ children, className }) => {
  return <div className={clsx('mx-auto w-full max-w-7xl px-6 lg:px-12', className)}>{children}</div>;
};

export default Container;

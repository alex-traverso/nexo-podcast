export default function Button({ children, onClick, disabled, href, target }) {
    return (
      <>
        <a
          href={href}
          target={target}
          rel='noreferrer'
          className='cursor-pointer w-max font-semibold lg:text-lg lg:px-6 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm bg-primary border-2 border-transparent text-white rounded-lg hover:bg-darkGrey hover:border-primary hover:border-2 transition-all tracking-widest'
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </a>
      </>
    );
  }
  
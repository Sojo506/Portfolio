export default function Footer({ isDarkMode }) {
  const date = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} py-8`}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p>&copy; {date} SojoDev_ All rights reserved.</p>
          </div>
          <div className='flex space-x-4'>
            <a
              href='#'
              className={`text-sm ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              } hover:underline`}
            >
              Privacy_Policy.txt
            </a>
            <a
              href='#'
              className={`text-sm ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              } hover:underline`}
            >
              Terms_of_Service.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

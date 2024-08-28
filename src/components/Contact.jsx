import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export default function Contact({ isDarkMode }) {
  return (
    <section
      id='contact'
      className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className='container mx-auto px-4'>
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Contact_
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <form
            className='space-y-4'
            action='https://formspree.io/f/xdknblpg'
            method='POST'
          >
            <Input
              name='name'
              placeholder='Name'
              className={`${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } border-green-400`}
            />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              className={`${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } border-green-400`}
            />
            <Textarea
              name='message'
              placeholder='Message'
              className={`${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } border-green-400`}
            />
            <Button
              type='submit'
              className={`${
                isDarkMode
                  ? 'bg-green-400 text-gray-900'
                  : 'bg-green-600 text-white'
              } hover:bg-opacity-80`}
            >
              Send_Message.exe
            </Button>
          </form>
          <div className='md:ml-16 lg:ml-28 xl:ml-40 space-y-4'>
            <p>Initiate communication sequence:</p>
            <div className='flex items-center space-x-2'>
              <Mail
                className={`h-5 w-5 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}
              />
              <a href='mailto:fsojodev@gmail.com'>fsojodev@gmail.com</a>
            </div>
            <div className='flex items-center space-x-2'>
              <Phone
                className={`h-5 w-5 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}
              />
              <a href='tel:+50687947110'>+506 87947110</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

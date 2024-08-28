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
          <div>
            <h3
              className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              Fill_it_out.txt
            </h3>
            <form
              className='space-y-4'
              action='https://formspree.io/f/xdknblpg'
              method='POST'
            >
              <Input
                name='name'
                placeholder='Name'
                className={`${
                  isDarkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-900'
                } border-green-400`}
              />
              <Input
                type='email'
                name='email'
                placeholder='Email'
                className={`${
                  isDarkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-900'
                } border-green-400`}
              />
              <Textarea
                name='message'
                placeholder='Message'
                className={`${
                  isDarkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-900'
                } border-green-400 resize-none`}
                rows='10'
                maxLength='1260'
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
          </div>
          <div className=''>
            <h3
              className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              FAQ.txt
            </h3>
            <div className='space-y-4'>
              {[
                {
                  q: 'What services does SojoDev offer?',
                  a: 'SojoDev specializes in backend development and custom web solutions, focusing on full-stack web development and delivering tailored software solutions.',
                },
                {
                  q: 'How long does a typical project take?',
                  a: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months.',
                },
                {
                  q: 'Do you offer maintenance and support after project completion?',
                  a: 'Yes, He offers ongoing maintenance and support to ensure your digital product remains up-to-date and runs smoothly.',
                },
                {
                  q: 'Can you work with my existing team?',
                  a: 'He is experienced in collaborating with in-house teams and can adapt to your existing workflows.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}
                  >
                    {faq.q}
                  </h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className='md:ml-16 lg:ml-28 xl:ml-40 space-y-4'>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

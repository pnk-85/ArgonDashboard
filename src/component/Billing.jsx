import React from 'react'
import { motion } from 'framer-motion'

const Billing = () => {
  return (
    <>
      <div className='md:flex gap-4 border border-gray-400 rounded-xl bg-white w-80 px-5 py-2 ml-4 mt-5 text-center'>
        <p className=''>Massage</p>
        <p className=''>Social</p>
        <p className=''>Notification</p>
        <p className=''>Backup</p>
      </div>
       {/* <div className='md:flex px-4 justify-between gap-3'>
        <div>
          
            <div className='md:flex items-center gap-6'>
              <div className='w-72 mx-auto'>
                <img src="./credit-card.png" alt="card" />
              </div>
              <div className='border-none border-gray-400 bg-white rounded-xl py-2 px-6 text-center'>
                <img src="./home-button.png" alt="" className='w-14 mx-auto' />
                <h3 className='text-xl font-medium mt-2'>Salary</h3>
                <p className='text-base font-normal mt-2'>Belong Interactive</p>
                <div className='border border-gray-200 mt-3'></div>
                <h1 className='text-xl font-bold mt-5'>+$2000</h1>
              </div>
              <div className='border-none border-gray-400 bg-white rounded-xl py-3 px-6 text-center'>
                <img src="./paypal.png" alt="" className='w-14 mx-auto' />
                <h3 className='text-xl font-medium mt-2'>PayPal</h3>
                <p className='text-base font-normal mt-2'>Freelance Payment</p>
                <div className='border border-gray-200 mt-3'></div>
                <h1 className='text-xl font-bold mt-5'>$455.00</h1>
              </div>
            </div>
          
          
          <div className='px-4 py-3 border-none border-gray-400 rounded-xl bg-white text-center'>
            <div className='md:flex justify-between'>
              <h1 className='text-base font-medium text-gray-700'>Payment Method</h1>
              <button className='border border-gray-400 rounded-xl px-4 py-2 bg-gray-800 text-white'>+Add New Card</button>
            </div>
            <div className='md:flex items-center justify-between mt-6 gap-4'>
              <div className='flex items-center gap-20 border border-gray-400 rounded-xl bg-white px-5 py-3'>
                <div className='flex items-center gap-3'>
                  <img src="./business.png" alt="money" className='w-14 mx-auto' />
                  <p className='text-base font-medium'>*** **** *** 7852</p>
                </div>
                <a href="#"><i className-pencil-fill"></i></a>
              </div>
              <div className='flex items-center gap-20 border border-gray-400 rounded-xl bg-white px-5 py-3'>
                <div className='flex items-center gap-3'>
                  <img src="./visa.png" alt="visa" className='w-10 mx-auto' />
                  <p className='text-base font-medium'>*** **** *** 5248</p>
                </div>
                <a href="#"><i className-pencil-fill"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4 py-2 border-none border-gray-400 bg-white rounded-xl mt-10'>
          <div className='md:flex gap-60 mt-3 md:text-left text-center'>
            <h2 className='text-base font-medium'>Invoicec</h2>
            <button className='border border-gray-400 rounded-xl bg-white text-cyan-400 px-6 py-1 text-sm'>View All</button>
          </div>

          <div className='md:flex justify-between mt-6 md:text-left text-center'>
            <div className=''>
              <p className='text-base font-semibold'>March, 01, 2020</p>
              <p className='text-sm font-normal text-gray-500'>#MS-415646</p>
            </div>
            <div className='md:flex gap-14'>
              <p className='text-base font-normal text-gray-600'>$180</p>
              <p className='text-base font-bold'>PDF</p>
            </div>
          </div>

          <div className='md:flex justify-between mt-6 md:text-left text-center'>
            <div className=''>
              <p className='text-base font-semibold'>February, 10, 2021</p>
              <p className='text-sm font-normal text-gray-500'>#RV-126749</p>
            </div>
            <div className='md:flex gap-14'>
              <p className='text-base font-normal text-gray-600'>$250</p>
              <p className='text-base font-bold'>PDF</p>
            </div>
          </div>

          <div className='md:flex justify-between mt-6 md:text-left text-center'>
            <div className=''>
              <p className='text-base font-semibold'>April, 05, 2020</p>
              <p className='text-sm font-normal text-gray-500'>#QW-103578</p>
            </div>
            <div className='md:flex gap-14'>
              <p className='text-base font-normal text-gray-600'>$120</p>
              <p className='text-base font-bold'>PDF</p>
            </div>
          </div>

          <div className='md:flex justify-between mt-6 md:text-left text-center'>
            <div className=''>
              <p className='text-base font-semibold'>June, 25, 2019</p>
              <p className='text-sm font-normal text-gray-500'>#MS-415646</p>
            </div>
            <div className='md:flex gap-14'>
              <p className='text-base font-normal text-gray-600'>$180</p>
              <p className='text-base font-bold'>PDF</p>
            </div>
          </div>

          <div className='md:flex justify-between mt-6 md:text-left text-center'>
            <div className=''>
              <p className='text-base font-semibold'>March, 01, 2019</p>
              <p className='text-sm font-normal text-gray-500'>#AR-803481</p>
            </div>
            <div className='md:flex gap-14'>
              <p className='text-base font-normal text-gray-600'>$300</p>
              <p className='text-base font-bold'>PDF</p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:flex px-4 py-2 justify-between gap-3'>
        <div className='px-3 py-2 mt-5 border border-gray-400 bg-white rounded-xl md:text-left text-center'>
          <h2 className='text-xl font-medium p-2'>Billing Information</h2>


          <div className='w-full px-3 py-4 mt-5 border border-gray-400 bg-slate-100 rounded-lg text-center'>
            <div className='md:flex items-center gap-80 mb-5 py-2'>
              <h2 className='text-base font-medium'>Oliver Liam</h2>
              <div className='flex justify-center gap-5'>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-delete-bin-7-fill text-red-600"></i></a>
                  <p className='text-red-600 font-medium'>Delete</p>
                </div>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-pencil-fill"></i></a>
                  <p className='font-medium'>Edit</p>
                </div>
              </div>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Company Name:</p>
              <p className='text-sm font-medium'>Viking Burrito</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Email Address:</p>
              <p className='text-sm font-medium'>oliver@burrito.com</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>VAT Number:</p>
              <p className='text-sm font-medium'>FRB1235476</p>
            </div>
          </div>

          <div className='w-full px-3 py-4 mt-5 border border-gray-400 bg-slate-100 rounded-lg text-center'>
            <div className='md:flex items-center gap-80 mb-5 py-2'>
              <h2 className='text-base font-medium'>Lucas Harper</h2>
              <div className='flex justify-center gap-5'>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-delete-bin-7-fill text-red-600"></i></a>
                  <p className='text-red-600 font-medium'>Delete</p>
                </div>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-pencil-fill"></i></a>
                  <p className='font-medium'>Edit</p>
                </div>
              </div>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Company Name:</p>
              <p className='text-sm font-medium'> Stone Tech Zone</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Email Address:</p>
              <p className='text-sm font-medium'>lucas@stone-tech.com</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>VAT Number:</p>
              <p className='text-sm font-medium'>FRB1235476</p>
            </div>
          </div>

          <div className='w-full px-3 py-4 mt-5 border border-gray-400 bg-slate-100 rounded-lg text-center'>
            <div className='md:flex items-center gap-80 mb-5 py-2'>
              <h2 className='text-base font-medium'>Lucas Harper</h2>
              <div className='flex justify-center gap-5'>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-delete-bin-7-fill text-red-600"></i></a>
                  <p className='text-red-600 font-medium'>Delete</p>
                </div>
                <div className='md:flex gap-1'>
                  <a href="#"><i className="ri-pencil-fill"></i></a>
                  <p className='font-medium'>Edit</p>
                </div>
              </div>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Company Name:</p>
              <p className='text-sm font-medium'>Fiber Notion</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>Email Address:</p>
              <p className='text-sm font-medium'>ethan@fiber.com</p>
            </div>
            <div className='md:flex gap-1 mt-2'>
              <p className='text-sm font-normal text-gray-700'>VAT Number:</p>
              <p className='text-sm font-medium'>FRB1235476</p>
            </div>
          </div>
        </div>

        <div className='w-full px-3 py-4 mt-5 border border-gray-400 bg-white rounded-xl md:text-left text-center'>
          <div className='md:flex gap-52'>
            <h3 className='text-base font-medium'>Your Transaction's</h3>
            <div className='flex gap-2 items-center justify-center'>
              <i className="ri-calendar-2-line"></i>
              <p>23 - 30 March 2020</p>
            </div>
          </div>
          <div className='mt-5'>
          <h2 className='mt-5 text-sm font-bold text-gray-500'>NEWEST</h2>
          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-down-fill border border-red-600 rounded-full p-1 text-red-600"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>Netflix</p>
                <p className='text-gray-500 font-light'>27 March 2020, at 12:30 PM</p>
              </div>
            </div>
            <p className='text-red-600 font-semibold'>- $ 2,500</p>
          </div>
          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-up-fill border border-three rounded-full p-1 text-three"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>Apple</p>
                <p className='text-gray-500 font-light'>27 March 2020, at 04:30 AM</p>
              </div>
            </div>
            <p className='text-three font-semibold'>+$2,500</p>
          </div>
          </div>

        <div className='mt-10'>
        <h2 className='mt-5 text-sm font-bold text-gray-500'>YESTERDAY</h2>
          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-up-fill border border-three rounded-full p-1 text-three"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>Stripe</p>
                <p className='text-gray-500 font-light'>26 March 2020, at 13:45 PM</p>
              </div>
            </div>
            <p className='text-three font-semibold'>+$750</p>
          </div>
          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-up-fill border border-three rounded-full p-1 text-three"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>HubSpot</p>
                <p className='text-gray-500 font-light'>26 March 2020, at 12:30 PM</p>
              </div>
            </div>
            <p className='text-three font-semibold'>+$1000</p>
          </div>

          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-up-fill border border-three rounded-full p-1 text-three"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>Creative Tim</p>
                <p className='text-gray-500 font-light'>26 March 2020, at 08:30 AM</p>
              </div>
            </div>
            <p className='text-three font-semibold'>+$2,500</p>
          </div>

          <div className='flex md:gap-48 gap-3 mt-5 px-1'>
            <div className='flex gap-2 items-center'>
              <a href="#"><i className="ri-arrow-up-fill border border-three rounded-full p-1"></i></a>
              <div className=''>
                <p className='text-gray-700 font-medium'>Webflow</p>
                <p className='text-gray-500 font-light'>26 March 2020, at 05:00 AM</p>
              </div>
            </div>
            <p className='text-black font-semibold'>Pending</p>
          </div>
        </div>
        </div>


      </div> */}

      <div className='md:flex px-4 justify-between gap-3'>
        <div>
          <div className='md:flex items-center gap-6'>
            <motion.div
            initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
            className='w-72 mx-auto'>
              <img src="./credit-card.png" alt="card" />
            </motion.div>
            <motion.div
            initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
            className='border-none border-gray-400 bg-white rounded-xl py-2 px-6 text-center'>
              <img src="./home-button.png" alt="home-button" className='w-14 mx-auto' />
              <h3 className='text-xl font-medium mt-2'>Salary</h3>
              <p className='text-base font-normal mt-2'>Belong Interactive</p>
              <div className='border border-gray-200 mt-3'></div>
              <h1 className='text-xl font-bold mt-5'>+$2000</h1>
            </motion.div>
            <motion.div
            initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
            className='border-none border-gray-400 bg-white rounded-xl py-3 px-6 text-center'>
              <img src="./paypal.png" alt="paypal" className='w-14 mx-auto' />
              <h3 className='text-xl font-medium mt-2'>PayPal</h3>
              <p className='text-base font-normal mt-2'>Freelance Payment</p>
              <div className='border border-gray-200 mt-3'></div>
              <h1 className='text-xl font-bold mt-5'>$455.00</h1>
            </motion.div>
          </div>
          <motion.div
          initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
          className='px-4 py-3 border-none border-gray-400 rounded-xl bg-white text-center'>
            <div className='md:flex justify-between'>
              <h1 className='text-base font-medium text-gray-700'>Payment Method</h1>
              <button className='border border-gray-400 rounded-xl px-4 py-2 bg-gray-800 text-white'>+Add New Card</button>
            </div>
            <div className='md:flex items-center justify-between mt-6 gap-4'>
              <div className='flex items-center gap-20 border border-gray-400 rounded-xl bg-white px-5 py-3'>
                <div className='flex items-center gap-3'>
                  <img src="./business.png" alt="money" className='w-14 mx-auto' />
                  <p className='text-base font-medium'>*** **** *** 7852</p>
                </div>
                <a href="#"><i className="ri-pencil-fill"></i></a>
              </div>
              <div className='flex items-center gap-20 border border-gray-400 rounded-xl bg-white px-5 py-3'>
                <div className='flex items-center gap-3'>
                  <img src="./visa.png" alt="visa" className='w-10 mx-auto' />
                  <p className='text-base font-medium'>*** **** *** 5248</p>
                </div>
                <a href="#"><i className="ri-pencil-fill"></i></a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
        className='px-4 py-2 border-none border-gray-400 bg-white rounded-xl mt-10'>
          <div className='md:flex gap-60 mt-3 md:text-left text-center'>
            <h2 className='text-base font-medium'>Invoices</h2>
            <button className='border border-gray-400 rounded-xl bg-white text-cyan-400 px-6 py-1 text-sm'>View All</button>
          </div>
          {[
            { date: 'March, 01, 2020', id: '#MS-415646', amount: '$180' },
            { date: 'February, 10, 2021', id: '#RV-126749', amount: '$250' },
            { date: 'April, 05, 2020', id: '#QW-103578', amount: '$120' },
            { date: 'June, 25, 2019', id: '#MS-415646', amount: '$180' },
            { date: 'March, 01, 2019', id: '#AR-803481', amount: '$300' }
          ].map((invoice, index) => (
            <div key={index} className='md:flex justify-between mt-6 md:text-left text-center'>
              <div>
                <p className='text-base font-semibold'>{invoice.date}</p>
                <p className='text-sm font-normal text-gray-500'>{invoice.id}</p>
              </div>
              <div className='md:flex gap-14'>
                <p className='text-base font-normal text-gray-600'>{invoice.amount}</p>
                <p className='text-base font-bold'>PDF</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className='md:flex px-4 py-2 justify-between gap-3'>
        <motion.div
        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
        className='px-3 py-2 mt-5 border border-gray-400 bg-white rounded-xl md:text-left text-center'>
          <h2 className='text-xl font-medium p-2'>Billing Information</h2>
          {[
            { name: 'Oliver Liam', company: 'Viking Burrito', email: 'oliver@burrito.com', vat: 'FRB1235476' },
            { name: 'Lucas Harper', company: 'Stone Tech Zone', email: 'lucas@stone-tech.com', vat: 'FRB1235476' },
            { name: 'Ethan Hunt', company: 'Fiber Notion', email: 'ethan@fiber.com', vat: 'FRB1235476' }
          ].map((billing, index) => (
            <div key={index} className='w-full px-3 py-4 mt-5 border border-gray-400 bg-slate-100 rounded-lg text-center'>
              <div className='md:flex items-center gap-80 mb-5 py-2'>
                <h2 className='text-base font-medium'>{billing.name}</h2>
                <div className='flex justify-center gap-5'>
                  <div className='md:flex gap-1'>
                    <a href="#"><i className="ri-delete-bin-7-fill text-red-600"></i></a>
                    <p className='text-red-600 font-medium'>Delete</p>
                  </div>
                  <div className='md:flex gap-1'>
                    <a href="#"><i className="ri-pencil-fill"></i></a>
                    <p className='font-medium'>Edit</p>
                  </div>
                </div>
              </div>
              <div className='md:flex gap-1 mt-2'>
                <p className='text-sm font-normal text-gray-700'>Company Name:</p>
                <p className='text-sm font-medium'>{billing.company}</p>
              </div>
              <div className='md:flex gap-1 mt-2'>
                <p className='text-sm font-normal text-gray-700'>Email Address:</p>
                <p className='text-sm font-medium'>{billing.email}</p>
              </div>
              <div className='md:flex gap-1 mt-2'>
                <p className='text-sm font-normal text-gray-700'>VAT Number:</p>
                <p className='text-sm font-medium'>{billing.vat}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
        initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:0.9}}
        className='w-full px-3 py-4 mt-5 border border-gray-400 bg-white rounded-xl md:text-left text-center'>
          <div className='md:flex gap-52'>
            <h3 className='text-base font-medium'>Your Transactions</h3>
            <div className='flex gap-2 items-center justify-center'>
              <i className="ri-calendar-2-line"></i>
              <p>23 - 30 March 2020</p>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='mt-5 text-sm font-bold text-gray-500'>NEWEST</h2>
            {[
              { name: 'Netflix', date: '27 March 2020, at 12:30 PM', amount: '- $ 2,500', status: 'ri-arrow-down-fill', color: 'text-red-600' },
              { name: 'Apple', date: '27 March 2020, at 04:30 AM', amount: '+$2,500', status: 'ri-arrow-up-fill', color: 'text-three' }
            ].map((transaction, index) => (
              <div key={index} className='flex md:gap-48 gap-3 mt-5 px-1'>
                <div className='flex gap-2 items-center'>
                  <a href="#"><i className={`${transaction.status} border border-${transaction.color} rounded-full p-1 ${transaction.color}`}></i></a>
                  <div>
                    <p className='text-gray-700 font-medium'>{transaction.name}</p>
                    <p className='text-sm text-gray-500 font-normal'>{transaction.date}</p>
                  </div>
                </div>
                <p className={`text-base font-medium ${transaction.color}`}>{transaction.amount}</p>
              </div>
            ))}
            <h2 className='mt-5 text-sm font-bold text-gray-500'>YESTERDAY</h2>
            {[
              { name: 'Stripe', date: '26 March 2020, at 13:45 PM', amount: '+ $ 750', status: 'ri-arrow-up-fill', color: 'text-three' },
              { name: 'HubSpot', date: '26 March 2020, at 12:30 PM', amount: '+ $ 1,000', status: 'ri-arrow-up-fill', color: 'text-three' },
              { name: 'Webflow', date: '26 March 2020, at 05:00 PM', amount: 'Pending', status: 'ri-arrow-up-fill', color: 'text-yellow-400' }
            ].map((transaction, index) => (
              <div key={index} className='flex md:gap-48 gap-3 mt-5 px-1'>
                <div className='flex gap-2 items-center'>
                  <a href="#"><i className={`${transaction.status} border border-${transaction.color} rounded-full p-1 ${transaction.color}`}></i></a>
                  <div>
                    <p className='text-gray-700 font-medium'>{transaction.name}</p>
                    <p className='text-sm text-gray-500 font-normal'>{transaction.date}</p>
                  </div>
                </div>
                <p className={`text-base font-medium ${transaction.color}`}>{transaction.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </>
  )
}

export default Billing
'use client';

import { supabaseClient } from '@/lib/supabase';
import { TablesInsert } from '@/types/database';
import Error from 'next/error';
import { useForm } from 'react-hook-form';
import ContaxtBox from '@/components/contacts/contactBox';
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TablesInsert<{ schema: 'customers' }, 'messages'>>();

  const submit = handleSubmit(async data => {

    
    const { error } = await supabaseClient
      .schema('customers')
      .from('messages')
      .insert([data])
      .select('');

    if (error) {
      return <Error statusCode={Number(error.code)} />;
    }
  });

  const fieldInputClass = `block w-full border-b-2 border-gray-300 focus:border-primary 
  focus:border-blue-500 focus:outline-none px-2 py-1 transition ease-in-out delay-150 duration-150`;

  return (
    <ContaxtBox>
      <div className='bg-white text-black max-w-3xl mx-auto p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
        <form onSubmit={submit} className='space-y-4'>
          {/* Name */}
          <div>
            <label htmlFor='name_field' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input id='name_field' type='text' {...register('name')} className={fieldInputClass} />
          </div>

          {/* Email & Phone in flex row on larger screens */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <label htmlFor='email_field' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                id='email_field'
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email format'
                  }
                })}
                className={fieldInputClass}
              />
              {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
            </div>

            <div className='flex-1'>
              <label htmlFor='number_field' className='block text-sm font-medium text-gray-700'>
                Phone
              </label>
              <input
                id='number_field'
                type='tel'
                {...register('phone_number', {
                  pattern: {
                    value: /^[0-9]{9,15}$/,
                    message: 'Phone must be between 9 to 15 digits'
                  }
                })}
                className={fieldInputClass}
              />
              {errors.phone_number && (
                <p className='text-sm text-red-600'>{errors.phone_number.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor='message_field' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message_field'
              {...register('msg_body', { required: 'Message is required' })}
              className={fieldInputClass}
              rows={4}
            />
            {errors.msg_body && <p className='text-sm text-red-600'>{errors.msg_body.message}</p>}
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </ContaxtBox>
  );
}

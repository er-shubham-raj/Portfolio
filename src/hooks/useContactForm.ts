import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { sendContactEmail, ContactFormData } from '../lib/email';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedAt, setLastSubmittedAt] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Anti-spam protection: 30 seconds cooldown between submissions
    const now = Date.now();
    if (lastSubmittedAt && now - lastSubmittedAt < 30000) {
      const remainingSeconds = Math.ceil((30000 - (now - lastSubmittedAt)) / 1000);
      toast.error(`Please wait ${remainingSeconds}s before sending another message.`, {
        duration: 4000,
        style: {
          background: '#0f172a',
          color: '#f8fafc',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const success = await sendContactEmail(data);
      if (success) {
        setIsSuccess(true);
        setLastSubmittedAt(Date.now());
        reset();
        toast.success('Message sent successfully! Shubham will get back to you shortly.', {
          duration: 5000,
          style: {
            background: '#0f172a',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          },
        });
      }
    } catch (err: unknown) {
      console.error(err);
      toast.error('Failed to send message. Please email er.rajshubham@gmail.com directly.', {
        duration: 6000,
        style: {
          background: '#0f172a',
          color: '#f8fafc',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isSuccess,
  };
};

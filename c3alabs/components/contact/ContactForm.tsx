'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { INQUIRY_TYPES } from '@/lib/constants';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const type = searchParams?.get('type');
    if (type === 'investor') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({ ...prev, type: 'investor' }));
    } else if (type === 'career') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({ ...prev, type: 'career' }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <span className={styles.successLabel}>Message received.</span>
        <span className={styles.successMessage}>&ldquo;We&rsquo;ll be in touch.&rdquo;</span>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className={styles.input}
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        className={styles.input}
        value={formData.email}
        onChange={handleChange}
        required
      />

      <select
        name="type"
        className={styles.select}
        value={formData.type}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select one</option>
        {INQUIRY_TYPES.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="subject"
        placeholder="What's this about?"
        className={styles.input}
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Don't pitch. Just talk."
        className={styles.textarea}
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className={styles.submit}>
        Send →
      </button>
    </form>
  );
}

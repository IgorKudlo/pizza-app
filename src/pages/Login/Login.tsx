import styles from './Login.module.scss';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Input } from '@/components/Input';
import { PREFIX } from '@/helpers/API';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export const Login = () => {
  const [error, setError] = useState<string | null>();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password
      });
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={styles['login']}>
      <Heading>Вход</Heading>
      {error && <div className={styles['error']}>{error}</div>}
      <form className={styles['form']} onSubmit={submit}>
        <div className={styles['field']}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name='email' placeholder='a@gmail.com'/>
        </div>
        <div className={styles['field']}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" name='password' type="password" placeholder='123'/>
        </div>
        <Button appearance="big">Вход</Button>
      </form>
      <div className={styles['links']}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
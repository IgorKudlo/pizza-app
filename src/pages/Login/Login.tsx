import styles from './Login.module.scss';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Input } from '@/components/Input';

export const Login = () => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles['login']} onSubmit={submit}>
      <Heading>Вход</Heading>
      <form className={styles['form']}>
        <div className={styles['field']}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" placeholder='Email'/>
        </div>
        <div className={styles['field']}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder='Пароль'/>
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
import React, { useState } from 'react';
import styles from '../../../styles/auth.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Label,
} from 'reactstrap';

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Input type="email" placeholder="Email" className={styles.inputs} />
      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          className={styles.inputs}
        />
        <InputGroupText className={styles.inputGroupText} onClick={togglePassword}>
          <Button color="light">{showPassword ? <FaEye /> : <FaEyeSlash />}</Button>
        </InputGroupText>
      </InputGroup>
      <Label className={styles.forgotPassword}>
        <a>Forgot Password?</a>
      </Label>
      <Button color="primary" className={styles.submit}>
        Login
      </Button>
    </>
  );
};

export default LoginComponent;

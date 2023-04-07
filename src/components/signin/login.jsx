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
      <div className={styles.wrapForm}>
        <Input type="email" placeholder="Email"  />
        <InputGroup className={styles.pasEye}>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
          <InputGroupText id="eye" className={styles.pasField}>
            <Button  color="transparent">{showPassword ? <FaEye /> : <FaEyeSlash />}</Button>
          </InputGroupText>
        </InputGroup>

        <Label className={styles.forgotPassword}>
          <a>Forgot Password?</a>
        </Label>
        <Button className={styles.btnPrimary}>
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginComponent;

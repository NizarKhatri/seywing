import React, { useState } from 'react';
import styles from '../../../styles/auth.module.css';
import {
  Input,
  Button,
  Label,
  ButtonGroup,
} from 'reactstrap';

const SignupComponent = () => {
  const [step, setStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedMerchantType, setSelectedMerchantType] = useState('');
  const [isMoreThanOneCountry, setIsMoreThanOneCountry] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleMerchantType = (value) => {
    setSelectedMerchantType(value);
  };

  const handleCountry = (value) => {
    setIsMoreThanOneCountry(value);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex align-items-center">
          <div
            className={`rounded-circle p-2 border ${
              step === 1 ? 'border-primary text-primary' : 'text-muted'
            }`}
            style={{ height: '50px', width: '50px' }}
          >
            1
          </div>
          <div className="mx-2">
            <hr className="my-0 bg-primary" style={{ height: '2px', width: '50px' }} />
          </div>
          <div
            className={`rounded-circle p-2 border ${
              step === 2 ? 'border-primary text-primary' : 'text-muted'
            }`}
            style={{ height: '50px', width: '50px' }}
          >
            2
          </div>
        </div>
        {step === 1 && (
          <div className="mx-3">
            <Input type="text" placeholder="First Name" className={styles.inputs} />
            <Input type="text" placeholder="Last Name" className={styles.inputs} />
            <Input type="email" placeholder="Email" className={styles.inputs} />
            <Input type="password" placeholder="Password" className={styles.inputs} />
            <Button color="primary" className={styles.submit} onClick={handleNextStep}>
              Next
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="mx-3">
            <Input
              className={styles.select}
              type="select"
              name="select"
              id="exampleSelect"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                Country
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Input>
            <div className={styles.lblTypes}>
              <Label>Customer Type</Label>
            </div>
            <ButtonGroup>
              <Button
                color="secondary"
                outline
                onClick={() => handleMerchantType(1)}
                className={selectedMerchantType === 1 ? `${styles.btnSelected}` : `${styles.btn}`}
              >
                Merchant
              </Button>
              <Button
                color="secondary"
                outline
                onClick={() => handleMerchantType(2)}
                className={selectedMerchantType === 2 ? `${styles.btnSelected}` : `${styles.btn}`}
              >
                Influencer
              </Button>
            </ButtonGroup>
            <Input
              className={styles.select}
              type="select"
              name="select"
              id="exampleSelect"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                Business Type
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Input>
            <div className={styles.lblTypes}>
              <Label>Do you operate in more than one country</Label>
            </div>
            <ButtonGroup>
              <Button
                color="secondary"
                outline
                onClick={() => handleCountry(1)}
                className={isMoreThanOneCountry === 1 ? `${styles.btnSelected}` : `${styles.btn}`}
              >
                True
              </Button>
              <Button
                color="secondary"
                outline
                onClick={() => handleCountry(2)}
                className={isMoreThanOneCountry === 2 ? `${styles.btnSelected}` : `${styles.btn}`}
              >
                False
              </Button>
            </ButtonGroup>
            <Button color="primary" className={styles.submit} style={{ marginTop: 20 }}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SignupComponent;

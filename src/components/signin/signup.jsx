import React, { useState } from 'react';
import styles from '../../../styles/auth.module.css';
import {
  Input,
  Button,
  InputGroup,
  InputGroupText,
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
      <div className={styles.steps}>
        <div className={step === 2 ? `${styles.stepNextBefAlt} ${styles.stepTab}` : `${styles.stepTab}`}>
        <div className={step === 1 ? `${styles.stepTabActive} text-center` : `${styles.stepPrevActive} text-center`}>
            <div className={styles.stepCount}>
              <p>1</p>
            </div>
            <span>Primary</span>
          </div>
          <div className={step === 2 ? `${styles.stepTabActive} text-center` : ''}>
            <div className={styles.stepCount}>
              <p>2</p>
            </div>
            <span>Secondary</span>
          </div>
        </div>
        {step === 1 && (
          <div className={styles.wrapFormSup}>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button color="primary" className={styles.btnPrimary} onClick={handleNextStep}>
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
            <Button color="primary" className={styles.btnPrimary} style={{ marginTop: 20 }}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SignupComponent;

import apisauce from 'apisauce';

export const api1 = apisauce.create({
  baseURL: 'https://api.github.com/',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const api = apisauce.create({
  baseURL: 'https://itoweb.xyz',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const getFollower = body => {
  return api1.get(`users/${body.username}/followers`);
};

export const getLogin = body => {
  // console.log('---- getLogin API body', body)

  const param = {
    phone: body.data.phone,
    pin: body.data.pin,
  };

  return api.post('api/login', param);
};

export const getCheckPhone = body => {
  console.log('---- getCheckPhone API body', body)

  const param = {
    phone: body
  };

  return api.post('api/check_phone', param);
};

export const getForgotPinOtp = body => {

  let number = body.data;

  if(number.substring(0,3) == '601') {
    number = number.substring(1)
  }

  const param = {
    phone: number
  };

  // console.log('---- getForgotPinOtp API', number)
  return api.post('api/otp', param);
};

export const getForgotPinQuestion = body => {
  console.log('---- getForgotPinQuestion API body', body)

  const param = {
    phone: body
  };

  return api.post('api/get_question', '');
};

export const getForgotPinVerifyIdentity = body => {
  // console.log('---- getForgotPinVerifyIdentity API body', body)

  const param = {
    phone: body.data.phone,
    identity_no: body.data.identity_no
  };

  return api.post('api/verify_identity', param);
};

export const getForgotPinVerifyQuestion = body => {
  // console.log('---- getForgotPinVerifyQuestion API body', body)

  const param = {
    phone: body.data.phone,
    question_id: body.data.question_id,
    question_answer: body.data.question_answer
  };

  return api.post('api/verify_question', param);
};

export const getForgotPin = body => {
  // console.log('---- getForgotPin API body', body)

  const param = {
    phone: body.data.phone,
    pin: body.data.pin
  };

  return api.post('api/forgot_pin', param);
};

export const getValidatePhone = body => {
  // console.log('---- getValidatePhone API body', body.data)

  const param = {
    phone: body.data
  };

  return api.post('api/validate_phone', param);
};

export const getSignUpOtp = body => {
  // console.log('---- getSignUpOtp API body', body.data)

  let number = body.data;

  if(number.substring(0,3) == '601') {
    number = number.substring(1)
  }

  const param = {
    phone: number
  };

  // console.log('---- getForgotPinOtp API', number)
  return api.post('api/otp', param);
};

export const getRegister = body => {
  // console.log('---- getRegister API body', body)

  const param = {
    phone: body.data.phone,
    pin: body.data.pin,
    question_id: body.data.question_id,
    question_answer: body.data.question_answer,
    first_name: body.data.first_name,
    last_name: body.data.last_name,
    country: body.data.country,
    identity_type: body.data.identity_type,
    identity_no: body.data.identity_no,
    email: body.data.email,
  };

  return api.post('api/register', param);
};

export const getCheckBalance = body => {
  // console.log('---- getCheckBalance API body', body)

  const token = body.data;

  const param = {};

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/deposit/check_balance', param, config);
};

export const getCheckTransaction = body => {
  // console.log('---- getCheckTransaction API body', body)

  const token = body.data;
  const param = {};

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/deposit/check_transaction', param, config);
};

export const getCheckTransactionPhone = body => {
  // console.log('---- getCheckTransactionPhone API body', body)

  const param = {
    phone: body
  };

  return api.post('api/check_phone', param);
};

export const getVerifyPin = body => {
  // console.log('---- getVerifyPin API body', body)

  const token = body.data.token;
  const param = {
    pin: body.data.pin
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/client/verify_pin', param, config);
};

export const getTransfer = body => {
  // console.log('---- getTransfer API body', body)

  const token = body.data.token;
  const param = {
    pay_to_phone: body.data.pay_to_phone,
    amount: body.data.amount,
    description: body.data.description,
    timestamp: body.data.timestamp
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/deposit/transfer', param, config);
};

export const getQuestion = body => {
  // console.log('---- getQuestion API body', body)

  const param = {
    phone: body
  };

  return api.post('api/get_question', '');
};

export const getProfile = body => {
  // console.log('---- getProfile API body', body)

  const token = body.token;
  console.log('--- getProfile token', token)

  const param = {};

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/client/get_profile', param, config);
};

// REDUX STEP 1 - CREATE API
export const getReload = body => {
  console.log('---- getReload API body', body)

  const token = body.data.token;
  const param = {
    payment_mode: body.data.payment_mode,
    provider: body.data.provider,
    reload: body.data.reload,
    timestamp: body.data.timestamp
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };  

  return api.post('api/deposit/reload', param, config);
};

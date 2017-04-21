const env = process.env;

export const logStars = function(message) {
  console.log('***********');
  console.info(message);
  console.log('***********');
};


export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.Port || 8080
};
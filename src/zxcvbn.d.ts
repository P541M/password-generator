declare module 'zxcvbn' {
  function zxcvbn(password: string): {
    score: number;
    feedback: {
      suggestions: string[];
      warning: string;
    };
    crack_times_display: {
      offline_slow_hashing_1e4_per_second: string;
      offline_fast_hashing_1e10_per_second: string;
      online_no_throttling_10_per_second: string;
      online_throttling_100_per_hour: string;
    };
  };

  export default zxcvbn;
}

import React from 'react';
import styles from './Loader.module.css';
// const Loader = ({ error, timedOut, pastDelay, retry }) => {
//   if (error) {
//     return (
//       <div>
//         Error!{' '}
//         <button type="button" onClick={retry}>
//           Retry
//         </button>
//       </div>
//     );
//   }
//   if (timedOut) {
//     return (
//       <div>
//         Taking a long time...{' '}
//         <button type="button" onClick={retry}>
//           Retry
//         </button>
//       </div>
//     );
//   }
//   if (pastDelay) {
//     return <div>Loading...</div>;
//   }
//   return null;
// };

const Loader = () => <div className={styles.loader} />;

export default Loader;

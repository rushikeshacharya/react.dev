// import { useRef } from 'react';

// export default function Toggle() {
//   const isOnRef = useRef(false);

//   return (
//     <button onClick={() => {
//       isOnRef.current = !isOnRef.current;
//     }}>
//       {isOnRef.current ? 'On' : 'Off'}
//     </button>
//   );
// }

import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
}

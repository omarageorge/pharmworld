import { useState } from 'react';

export default function useLoader() {
  const [loading, setLoading] = useState(false);

  return [loading, setLoading];
}

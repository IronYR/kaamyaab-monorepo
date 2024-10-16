import { useState, useEffect } from 'react';


const useUserInfo = () => {
  const [user, setUser] = useState<any>(null);
  const [jwt,setJwt]=useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch('/api/auth/cookie');
        if (!res.ok) throw new Error('Failed to fetch user info');

        const data= await res.json();
        setUser(data.user.user)
        setJwt(data.jwt)
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { user,jwt, loading, error };
};

export default useUserInfo;

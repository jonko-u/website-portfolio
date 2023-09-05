"use client";
import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const useSkills = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getSkills', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useSkills;
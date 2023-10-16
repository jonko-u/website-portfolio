"use client";
import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const usePDF = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getPDF', fetcher, {
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

export default usePDF;
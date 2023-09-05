"use client";
import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const usePageInfo = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getPageInfo', fetcher, {
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

export default usePageInfo;
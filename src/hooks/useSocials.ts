"use client";
import useSwr from 'swr'
import fetcher from '@/libs/fetcher';
import { Social } from '@/typing';



const useSocials = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getSocials', fetcher, {
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

export default useSocials;
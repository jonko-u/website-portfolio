"use client";

import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const useExperiences = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getExperiences', fetcher, {
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

export default useExperiences;
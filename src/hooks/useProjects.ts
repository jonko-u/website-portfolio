"use client";
import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const useProjects = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/getProjects', fetcher, {
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

export default useProjects;
const landingData = ref([]);

export const useLanding = async () => {
  const { get } = useApiRequest();

  const fetchLandingData = async () => {
    const { data } = await get("/landing");

    // console.log("data :>> ", data);

    landingData.value = data;
  };

  return {
    fetchLandingData,
    data: landingData,
  };
};

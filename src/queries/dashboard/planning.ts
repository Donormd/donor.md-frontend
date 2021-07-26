import { PlanningForm } from '../../core/interfaces/planning';
import { baseFetch } from '../../core/services/fetch';

export const getPlanning = async () => {
  await baseFetch({
    url: `/planning`,
    headers: {
      authorization: true,
    },
  });
};

export const sendPlanningForm = async (obj: PlanningForm) => {
  await baseFetch({
    url: `/planning`,
    method: 'post',
    data: obj,
  });
};

import { BloodGroup } from '../../components/sections/home/monitoring/blood-item';
import { monitoringUrl } from '../../core/constants/url';
import { formatDate } from '../../core/helpers/converters';
import { IMonitoring, IMonitoringResponse } from '../../core/interfaces/monitoring';
import { baseFetch } from '../../core/services/fetch';

interface ValuesType {
  group: BloodGroup;
  quantity: number;
}

interface MonitoringReturnType {
  values: ValuesType[];
  dateUpdate: string;
  fullname: string;
  _id: string;
}

export const getMonitoringData = async (): Promise<MonitoringReturnType> => {
  const { data } = await baseFetch<IMonitoring[]>({ url: monitoringUrl });

  const [{ values, dateUpdate, fullname, _id }] = data;

  const valuesPrepare = Object.entries(values).map(
    ([group, quantity]) =>
      <ValuesType>{
        group,
        quantity,
      },
  );

  const dateUpdatePrepare = formatDate(new Date(dateUpdate));

  return { values: valuesPrepare, dateUpdate: dateUpdatePrepare, fullname, _id };
};

export const updateMonitoringData = async (payload: IMonitoringResponse) => {
  await baseFetch({
    url: monitoringUrl,
    method: 'PUT',
    data: payload,
  });
};

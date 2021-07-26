export interface IMonitoring {
  _id: string;
  fullname: string;
  dateUpdate: Date;
  values: Record<string, number>;
}

export interface IMonitoringResponse {
  _id: string;
  fullname: string;
  values: Record<string, number>;
}

import { apiV1 } from '../core/constants/url';
import { IQuestion, IQuestionnaireStory } from '../core/interfaces/question';
import { baseFetch } from '../core/services/fetch';

export const getQuestionnaire = async () => {
  const { data } = await baseFetch<IQuestion[]>({ url: `${apiV1}/questionnaire` });
  return data;
};

export const createQuestionnaireAction = async (payload: IQuestionnaireStory) => {
  const { data } = await baseFetch<IQuestion>({
    method: 'POST',
    url: `${apiV1}/questionnaire`,
    data: payload,
  });

  return { data };
};

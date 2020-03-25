const prefix = 'PLAN';
const type = 'LISTENER';

export default {
  GET_CURRENT_PLAN_DATA_REQUEST: `${type}:${prefix}_GET_CURRENT_PLAN_DATA_REQUEST`,
  SET_PLAN_CRITERIA_REQUEST: `${type}:${prefix}_SET_PLAN_CRITERIA_REQUEST`,
  SET_NEW_VOLUME_TO_CURRENT_PLAN: `${type}:${prefix}_SET_NEW_VOLUME_TO_CURRENT_PLAN`,
  GET_VOLUME_TICKET_DATA_FOR_CURRENT_PLAN: `${type}:${prefix}_GET_VOLUME_TICKET_DATA_FOR_CURRENT_PLAN`,
};

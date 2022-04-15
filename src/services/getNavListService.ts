import { NavItem } from './../store/slices/navList';
import api from '../utils/apiCall';

async function getNavListService(): Promise<NavItem[]> {
  const { apiCall } = api;
  const url = process.env.REACT_APP_API_URL as string;
  return apiCall<NavItem[]>(url);
}

const toExport = {
  getNavListService,
};
export default toExport;

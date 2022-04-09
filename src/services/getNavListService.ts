import { NavItem } from './../store/slices/navList';
import apiCall from '../utils/apiCall';

async function getNavListService(): Promise<NavItem[]> {
  const url = process.env.REACT_APP_API_URL as string;
  return apiCall<NavItem[]>(url);
}

export default getNavListService;

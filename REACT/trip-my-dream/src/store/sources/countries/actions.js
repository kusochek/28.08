import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`);

export default { filterAction };

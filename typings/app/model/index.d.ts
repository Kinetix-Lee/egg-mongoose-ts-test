// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/model/Test';

declare module 'egg' {
  interface IModel {
    Test: ReturnType<typeof ExportTest>;
  }
}
